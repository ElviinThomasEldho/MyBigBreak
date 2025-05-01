import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification
    minify: 'terser',
    // Enable tree shaking
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code
          vendor: ['react', 'react-dom'],
          // Split UI libraries
          mui: ['@mui/material', '@mui/icons-material'],
          // Split animation libraries
          animation: ['framer-motion'],
        },
      },
    },
    // Optimize chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable sourcemap for production
    sourcemap: false,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize assets
    assetsInlineLimit: 4096, // 4kb
  },
  // Optimize development server
  server: {
    hmr: {
      overlay: false
    }
  }
})
