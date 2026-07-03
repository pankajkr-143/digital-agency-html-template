import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            }
            if (id.includes('aos')) {
              return 'vendor-aos';
            }
            if (id.includes('lenis')) {
              return 'vendor-lenis';
            }
            return 'vendor-libs'; // other third-party dependencies
          }
        }
      }
    },
    chunkSizeWarningLimit: 800, // Increase limit slightly to 800kb as we split chunks
  }
})
