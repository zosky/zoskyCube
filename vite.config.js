import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/zoskyCube/' : '/',
  server: { 
    open: true,
    proxy: {
      '/api': {
        target: 'https://us-central1-zoskycube-bossbattle.cloudfunctions.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: true,
      },
      '/zoskyCube-archive': {
        target: 'https://zosky.github.io',
        changeOrigin: true,
        secure: true,
      },
    }
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Keep standard naming - the issue is with service worker caching, not file naming
        manualChunks: undefined
      }
    }
  },
  plugins: [
    vue(),
    VueRouter({ 
      dts: 'src/auto-router.d.ts',
      extendRoutes: (routes) => {
        if (process.env.NODE_ENV === 'production') {
          return routes.filter(route => !route.meta?.devOnly)
        }
        return routes
      }
    }),
    Components({ 
      resolvers: [HeadlessUiResolver()],
      dts: 'src/auto-components.d.ts'
    }),
    AutoImport({
      imports: ['vue', VueRouterAutoImports],
      dts: 'src/auto-imports.d.ts'
    })
    // PWA removed - service worker was causing caching issues with dynamic routes
    // Images and API calls will be cached by browser's standard HTTP cache
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }  
})
