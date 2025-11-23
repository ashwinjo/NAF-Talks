import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/NAF-Talks/', // Must match exact GitHub repo name (case-sensitive)
  build: {
    outDir: 'dist',
  },
})

