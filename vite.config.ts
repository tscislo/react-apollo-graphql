/// <reference types="vitest" />
/// <reference types="vitest/globals" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    outputFile: {
      junit: "test-results.xml",
    },
    // setupFiles: ['./src/setup-vitest.ts'], // TODO: Uncomment
  }
})
