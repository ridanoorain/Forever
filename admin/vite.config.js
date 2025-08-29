import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {port: 5174},
   build: {
    rollupOptions: {
      external: [],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/react-router-dom/, /node_modules/]
    }
  },
  
  optimizeDeps: {
    include: ['react-router-dom']
  }
})
