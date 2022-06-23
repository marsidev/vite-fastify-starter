import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    proxy: { '/api': 'http://localhost:3001' }
  },
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: '../../public',
    emptyOutDir: false
  }
})
