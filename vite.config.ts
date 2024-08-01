import { URL, fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // Skip component resolution for Add-to-Calendar plugin:
      // https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: tag => tag.includes('-'),
        },
      },
    }),
    svgLoader({ svgo: false }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/entry.js'),
      name: 'ucla-library-website-components',
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
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
    extensions: ['.vue', '.js', '.json'],
  },
})
