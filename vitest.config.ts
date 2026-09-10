import {defineConfig} from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    mockReset: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      // Set to what the existing suite already covers, so coverage cannot regress.
      // Remove to stop enforcing coverage (also revert ci.yml's pnpm coverage -> pnpm test)
      thresholds: {
        lines: 100,
        branches: 87.5,
        functions: 100,
        statements: 100
      }
    }
  }
})
