import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  server: {
    proxy: {
      '/users': {
        target: 'https://jsonplaceholder.typicode.com/users',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/users/, ''),
      },
      '/users/:id':{
        target:'https://jsonplaceholder.typicode.com/users/:id',
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/user/, ''),
      },
      '/posts':{
        target:`https://jsonplaceholder.typicode.com/posts`,
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/posts/, ''),
      },
      '/albums':{
        target:`https://jsonplaceholder.typicode.com/albums`,
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/albums/, ''),
      },
      '/photo':{
        target:'https://jsonplaceholder.typicode.com/photos',
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/photos/, ''),
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
