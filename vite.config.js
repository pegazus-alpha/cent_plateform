import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'maxime-dev.loca.lt',
      '.loca.lt'
    ],
    host: true,
    port: 5173
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Désactiver esbuild pour rolldown-vite
    target: 'esnext',
    minify: 'terser'
  },
  // PWA Configuration
  define: {
    '__PWA_VERSION__': JSON.stringify('1.0.0'),
    '__PWA_CACHE_NAME__': JSON.stringify('100-academy-v1')
  }
})
