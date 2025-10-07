import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: { 
    open: true, 
    // proxy: { '^/api/.*': {
    //   target: 'http://localhost:3715/',
    //   rewrite: (path:string) => path.replace(/.api./, ''),
    // },
    // }
  },
  build: {
    chunkSizeWarningLimit: 1000
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
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Zosky Cube',
        short_name: 'ZoskyCube',
        description: 'A timeline of games completed by Zosky',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        globIgnores: ['**/deathFrames/**'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/sheets\.googleapis\.com\/.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'google-sheets-data',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 // 1 day
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/steamcdn-a\.akamaihd\.net\/.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'steam-images',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 1 week
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }  
})
