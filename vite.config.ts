import { URL, fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // Turns of Add-to-Calendar plugin console warnings
      template: {
        compilerOptions: {
          // treat Add-to-Calendar-Button plugin like a custom element
          isCustomElement: tag =>
            tag.startsWith('add-'),
        },
      },
    }),
    svgLoader({ svgo: false })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/entry.js'),
      name: 'ucla-library-website-components',
    },
    rollupOptions: {
      external: ['vue', 'vue-router', 'pinia', 'vuetify'],
      output: {
        // preserveModules: true,
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      // Additional Sass options go here
      scss: {
        additionalData: `
                  @import "ucla-library-design-tokens/scss/fonts.scss";
                  @import "ucla-library-design-tokens/scss/_tokens-ftva";
                  @import "ucla-library-design-tokens/scss/app.scss";
                `,
      },
      postcss: {
        postcssOptions: {
          plugins: [
            [
              'postcss-base64',
              {
                extensions: ['.svg'],
              },
            ],
          ],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~ucla-library-design-tokens': resolve(
        __dirname,
        'node_modules/ucla-library-design-tokens'
      ),
    },
    extensions: ['.mjs', '.mts', '.ts', '.jsx', '.tsx', '.vue', '.js', '.json'],
  },
})
