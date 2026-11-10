import { Buffer } from 'node:buffer'
import { mkdirSync, readFileSync, renameSync, statSync, writeFileSync } from 'node:fs'
import { registerHooks } from 'node:module'
import { dirname, extname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import ts from 'typescript'

// AVA 8 loads every test with import(), so the old ts-node/register hook (which
// only patches require()) never runs. Transpile TypeScript to a real CommonJS
// file — the same module format ts-node emitted — and redirect the import at
// it. Returning transpiled source from the load hook instead makes require() of
// ESM packages such as ava fail to link.
const cacheRoot = fileURLToPath(new URL('../node_modules/.cache/ava-register/v1/', import.meta.url))

const compilerOptions = {
  module: ts.ModuleKind.CommonJS,
  target: ts.ScriptTarget.ES2015,
  jsx: ts.JsxEmit.React,
  esModuleInterop: true,
  inlineSourceMap: true,
  inlineSources: true
}

const isTypeScriptFile = filePath =>
  (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) && !filePath.endsWith('.d.ts')

const isFile = filePath => {
  try {
    return statSync(filePath).isFile()
  } catch {
    return false
  }
}

const sourceMapMarker = '//# sourceMappingURL=data:application/json;base64,'

// TypeScript's inline map names the source by basename. Point it at the real
// file so c8 can attribute coverage to src/**/*.ts.
const retargetSourceMap = (code, sourcePath) => {
  const index = code.lastIndexOf(sourceMapMarker)
  if (index === -1) return code

  const map = JSON.parse(Buffer.from(code.slice(index + sourceMapMarker.length), 'base64').toString())
  map.sources = [sourcePath]
  map.sourceRoot = ''
  return code.slice(0, index + sourceMapMarker.length) + Buffer.from(JSON.stringify(map)).toString('base64')
}

const outputPath = sourcePath => join(cacheRoot, (sourcePath.startsWith('/') ? sourcePath.slice(1) : sourcePath) + '.cjs')

const compile = sourcePath => {
  const outPath = outputPath(sourcePath)
  try {
    if (statSync(outPath).mtimeMs >= statSync(sourcePath).mtimeMs) return outPath
  } catch {
    // Cache miss. Compile below.
  }

  let code = ts.transpileModule(readFileSync(sourcePath, 'utf8'), {
    compilerOptions,
    fileName: sourcePath
  }).outputText

  // Reassign the CommonJS `require` parameter (a new `const` clashes with it).
  // Keep this on the first line so the inline source map stays aligned.
  // Resolving from the .ts path lets extensionless imports keep working.
  const prelude = `require=module.constructor.createRequire(${JSON.stringify(sourcePath)});`
  code = code.startsWith('"use strict";')
    ? code.replace('"use strict";', `"use strict";${prelude}`)
    : `${prelude}\n${code}`
  code = retargetSourceMap(code, sourcePath)

  mkdirSync(dirname(outPath), { recursive: true })
  const temporaryPath = `${outPath}.${process.pid}.tmp`
  writeFileSync(temporaryPath, code)
  renameSync(temporaryPath, outPath)
  return outPath
}

const typeScriptFileURL = specifier => {
  if (!specifier.startsWith('file:')) return
  let filePath
  try {
    filePath = fileURLToPath(specifier)
  } catch {
    return
  }
  if (isTypeScriptFile(filePath) && isFile(filePath)) return filePath
}

const resolveTypeScript = (specifier, parentURL) => {
  if (!parentURL?.startsWith('file:') || !specifier.startsWith('.')) return

  const parentPath = fileURLToPath(parentURL)
  if (!isTypeScriptFile(parentPath)) return

  const base = join(dirname(parentPath), specifier)
  const extension = extname(base)
  const candidates =
    extension === '.ts' || extension === '.tsx'
      ? [base]
      : extension
        ? []
        : [base + '.ts', base + '.tsx', join(base, 'index.ts'), join(base, 'index.tsx')]

  return candidates.find(candidate => isTypeScriptFile(candidate) && isFile(candidate))
}

registerHooks({
  resolve(specifier, context, nextResolve) {
    const sourcePath = typeScriptFileURL(specifier) || resolveTypeScript(specifier, context.parentURL)
    if (sourcePath) {
      return {
        url: pathToFileURL(compile(sourcePath)).href,
        format: 'commonjs',
        shortCircuit: true
      }
    }

    return nextResolve(specifier, context)
  }
})
