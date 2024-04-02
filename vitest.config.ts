import { fileURLToPath } from 'node:url'
<<<<<<< HEAD
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
=======
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
>>>>>>> a74548e7471c3c029fdb6f2d4457f036bb9991c8
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
<<<<<<< HEAD
      root: fileURLToPath(new URL('./', import.meta.url))
=======
      root: fileURLToPath(new URL('./', import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/]
      }
>>>>>>> a74548e7471c3c029fdb6f2d4457f036bb9991c8
    }
  })
)
