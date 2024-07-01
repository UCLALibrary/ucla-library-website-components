import { URL, fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader({ svgo: false })],
  build: {
    lib: {
      entry: 'src/entry.js',
      name: 'ucla-library-website-components',
      fileName: format =>
        `ucla-library-website-components.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // preserveModules: true,
        exports: 'named', // Ensure that exports are named,
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
