import { readFileSync, statSync } from 'node:fs'
import { createRequire, registerHooks } from 'node:module'
import { dirname, extname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import ts from 'typescript'

// AVA 8 loads tests and preloads with import(), so the CommonJS ts-node
// register hook never sees the suite. Transpile TypeScript as ESM and shim the
// CommonJS packages whose named exports Node cannot import directly.
const require = createRequire(import.meta.url)
const shimmedPackages = new Set(['enzyme', 'sinon'])
const shimQuery = 'ava-cjs-shim'

const compilerOptions = {
  module: ts.ModuleKind.ESNext,
  target: ts.ScriptTarget.ES2022,
  jsx: ts.JsxEmit.React,
  esModuleInterop: true,
  inlineSourceMap: true,
  inlineSources: true
}

const isIdentifier = name => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name)

const isTypeScriptFile = filePath =>
  (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) && !filePath.endsWith('.d.ts')

const isFile = filePath => {
  try {
    return statSync(filePath).isFile()
  } catch {
    return false
  }
}

const filePathFromUrl = url => fileURLToPath(new URL(url))

const resolveTypeScript = (specifier, parentURL) => {
  if (!parentURL?.startsWith('file:') || !isTypeScriptFile(filePathFromUrl(parentURL))) return
  if (!specifier.startsWith('.')) return

  const base = join(dirname(filePathFromUrl(parentURL)), specifier)
  const extension = extname(base)
  const candidates =
    extension === '.ts' || extension === '.tsx'
      ? [base]
      : extension
        ? []
        : [base + '.ts', base + '.tsx', join(base, 'index.ts'), join(base, 'index.tsx')]

  return candidates.find(candidate => isTypeScriptFile(candidate) && isFile(candidate))
}

const transpile = filePath =>
  ts.transpileModule(readFileSync(filePath, 'utf8'), { compilerOptions, fileName: filePath }).outputText

const shimSource = filePath => {
  const mod = require(filePath)
  const names = Object.keys(mod).filter(name => name !== 'default' && name !== '__esModule' && isIdentifier(name))
  const lines = [
    "import { createRequire } from 'node:module'",
    `const require = createRequire(${JSON.stringify(pathToFileURL(filePath).href)})`,
    `const mod = require(${JSON.stringify(filePath)})`,
    'const defaultExport =',
    '  mod && mod.__esModule && Object.prototype.hasOwnProperty.call(mod, "default") ? mod.default : mod',
    'export default defaultExport',
    ...names.map(name => `export const ${name} = mod[${JSON.stringify(name)}]`)
  ]
  return lines.join('\n')
}

process.setSourceMapsEnabled(true)

registerHooks({
  resolve(specifier, context, nextResolve) {
    const typeScriptFile = resolveTypeScript(specifier, context.parentURL)
    if (typeScriptFile) {
      return {
        url: pathToFileURL(typeScriptFile).href,
        format: 'module',
        shortCircuit: true
      }
    }

    const parentIsTypeScript =
      context.parentURL?.startsWith('file:') && isTypeScriptFile(filePathFromUrl(context.parentURL))
    if (parentIsTypeScript && shimmedPackages.has(specifier)) {
      const resolved = nextResolve(specifier, context)
      const shimUrl = new URL(resolved.url)
      shimUrl.searchParams.set(shimQuery, '1')
      return { url: shimUrl.href, format: 'module', shortCircuit: true }
    }

    return nextResolve(specifier, context)
  },

  load(url, context, nextLoad) {
    if (url.startsWith('file:') && new URL(url).searchParams.has(shimQuery)) {
      return {
        format: 'module',
        source: shimSource(filePathFromUrl(url)),
        shortCircuit: true
      }
    }

    if (url.startsWith('file:') && isTypeScriptFile(filePathFromUrl(url))) {
      return {
        format: 'module',
        source: transpile(filePathFromUrl(url)),
        shortCircuit: true
      }
    }

    return nextLoad(url, context)
  }
})
