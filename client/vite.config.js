import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@contexts': '/src/contexts',
      '@layouts': '/src/layouts',
      '@services': '/src/services',
      '@config': '/src/config',
      '@api': '/src/api',
      '@types': '/src/types',
      '@sections': '/src/sections',
      '@icons': '/src/icons',
      
    },
  },
})
