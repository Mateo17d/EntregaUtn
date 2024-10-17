import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    sourcemap: false,
    target: 'es2015', // o 'esnext' si quieres usar características más modernas
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})