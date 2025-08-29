import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {port: 5174},
    build: {
    // Add this build configuration
    rollupOptions: {
      external: [], // Ensure this is empty to bundle all dependencies
    }
  },
  optimizeDeps: {
    include: ['react-router-dom'] // Explicitly include react-router-dom
  }
})
