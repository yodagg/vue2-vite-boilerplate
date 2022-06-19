import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'path'

const config = defineConfig({
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    sourcemap: true,
    minify: false
  },
  plugins: [
    vue(),
  ]
})

export default config