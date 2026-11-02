import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import { build, preview } from 'vite'

const outDir = await mkdtemp(join(tmpdir(), 'ui-box-benchmark-'))
const config = {
  configFile: false,
  root: fileURLToPath(new URL('.', import.meta.url)),
  build: { outDir, emptyOutDir: true },
  preview: { host: '127.0.0.1', port: 0 },
  logLevel: 'warn'
}
let server
let browser
try {
  await build(config)
  server = await preview(config)
  browser = await chromium.launch()
  const page = await browser.newPage()
  const errors = []
  page.on('pageerror', error => errors.push(error))
  await page.goto(server.resolvedUrls.local[0])
  await page.waitForFunction(() => typeof window.runBoxBenchmark === 'function')
  const result = await page.evaluate(() => window.runBoxBenchmark())
  if (errors.length) throw new AggregateError(errors, 'Benchmark failed')
  console.log(JSON.stringify(result, null, 2))
} finally {
  await browser?.close()
  if (server) await new Promise(resolve => server.httpServer.close(resolve))
  await rm(outDir, { recursive: true, force: true })
}
