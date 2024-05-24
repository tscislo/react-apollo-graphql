// vitest.config.ts
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            root: './src',
            globals: true,
            environment: 'happy-dom',
            setupFiles: ['./setup-vitest.ts'],
        },
    }),
)
