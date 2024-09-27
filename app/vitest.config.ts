import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: 'types', replacement: fileURLToPath(new URL('./types', import.meta.url)) },
      { find: 'test', replacement: fileURLToPath(new URL('./test', import.meta.url)) },
    ],
  },
  test: {
    name: 'App',
    environment: 'happy-dom',
    css: false,
    clearMocks: true,
    mockReset: true,
    unstubGlobals: true,
    sequence: {
      shuffle: false,
    },
    deps: {
      optimizer: {
        web: {
          enabled: true,
        },
      },
    },
    setupFiles: ['./test/setup.ts'],
    include: [
      '**/__tests__/**/*.spec.ts',
    ],
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
        'src/**/*.{ts,vue}'
      ]
    },
  },
})
