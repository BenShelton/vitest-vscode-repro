import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  test: {
    poolOptions: {
      threads: {
        useAtomics: true,
      },
    },
    coverage: {
      all: true,
      reporter: [
        'text',
        'text-summary',
        'html',
      ],
      provider: 'istanbul',
      reportsDirectory: 'coverage',
      include: [
        'app/src/**/*.{ts,vue}'
      ]
    },
  },
})
