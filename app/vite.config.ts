import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    // @ts-ignore
    vue(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: 'types', replacement: fileURLToPath(new URL('./types', import.meta.url)) },
    ],
  },
})
