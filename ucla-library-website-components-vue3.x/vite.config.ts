import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      // Additional Sass options go here
      scss: {
        additionalData: `
          @import "ucla-library-design-tokens/scss/fonts.scss";
          @import "ucla-library-design-tokens/scss/app.scss";
        `
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
