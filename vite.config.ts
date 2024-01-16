import { defineConfig } from 'vite'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'live-demo') {
    return {
      base: './',
      test: {
        globals: true,
      },
      resolve: {
        alias: {
          '~': resolve(__dirname, 'src', 'bananaConverter'),
        },
      },
      build: {
        rollupOptions: {
          input: ['index.html'],
        },
      },
    }
  } else {
    return {
      test: {
        globals: true,
        setupFiles: 'src/setupTests.ts',
        includeSource: ['src/**/*.spec.ts', 'src/**/*.test.ts'],
      },
      resolve: {
        alias: {
          '~': resolve(__dirname, 'src', 'bananaConverter'),
        },
      },
      build: {
        lib: {
          entry: resolve(__dirname, 'src/bananaConverter', 'index.ts'),
          name: 'banana-converter',
          fileName: 'banana-converter',
        },
      },
    }
  }
})
