import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap 5 still triggers Dart Sass deprecations; the project's own
        // @import structure can move to @use before Dart Sass 3.
        quietDeps: true,
        silenceDeprecations: ['import']
      }
    }
  }
})
