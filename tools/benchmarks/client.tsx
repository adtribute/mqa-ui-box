import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import benchmark from './box'

interface BenchmarkResult {
  samples: number
  mountsPerSample: number
  medianMs: number
  p95Ms: number
}

declare global {
  interface Window {
    runBoxBenchmark: () => BenchmarkResult
  }
}

window.runBoxBenchmark = () => {
  const durations: number[] = []
  const mountsPerSample = 50
  for (let i = 0; i < 110; i++) {
    const start = performance.now()
    for (let mount = 0; mount < mountsPerSample; mount++) {
      const container = document.createElement('div')
      const root = createRoot(container)
      flushSync(() => root.render(benchmark()))
      root.unmount()
    }
    const elapsed = (performance.now() - start) / mountsPerSample
    if (i >= 10) durations.push(elapsed)
  }
  durations.sort((a, b) => a - b)
  return { samples: durations.length, mountsPerSample, medianMs: durations[50], p95Ms: durations[95] }
}
