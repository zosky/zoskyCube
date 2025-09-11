import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  server: { 
    open: true, 
    // proxy: { '^/api/.*': {
    //   target: 'http://localhost:3715/',
    //   rewrite: (path:string) => path.replace(/.api./, ''),
    // },
    // }
  },
  plugins: [
    vue(),
    VueRouter({ 
      dts: 'src/auto-router.d.ts' 
    }),
    Components({ 
      resolvers: [HeadlessUiResolver()],
      dts: 'src/auto-components.d.ts'
    }),
    AutoImport({
      imports: ['vue', VueRouterAutoImports],
      dts: 'src/auto-imports.d.ts'
    })
  ],
})
