import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['react-helmet-async']
        }
      }
    }
  },
  // PWA Configuration
  define: {
    '__PWA_VERSION__': JSON.stringify(process.env.npm_package_version || '1.0.0'),
    '__PWA_CACHE_NAME__': JSON.stringify('100-academy-v1')
  }
})
