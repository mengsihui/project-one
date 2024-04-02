import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [vue(), vueJsx()],
=======
  plugins: [
    vue(),
    vueJsx(),
  ],
>>>>>>> a74548e7471c3c029fdb6f2d4457f036bb9991c8
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
