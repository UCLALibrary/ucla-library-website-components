import { URL, fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import dts from 'vite-plugin-dts'

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
    svgLoader({ svgo: false }),
    dts({
      tsconfigPath: './tsconfig.json',
      outDir: 'dist',
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, '/src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: 'index'
    },
    rollupOptions: {
      // The following comented code for generating separate components output instead of one lib file like above can be enabled but needs further improvement
      // This configuration tells Rollup to treat each component file as a separate entry point. The resulting output will place each built component into the dist/components directory as a standalone module.
      /* input: {
        ButtonLink: resolve(__dirname, 'src/lib-components/ButtonLink.vue'),
        SmartLink: resolve(__dirname, 'src/lib-components/SmartLink.vue')
      },
      output: {
        format: 'es', // Typically, ES modules are a good choice for components
        dir: 'dist/components',
        entryFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }, */
      external: ['vue', 'vue-router', 'pinia', 'vuetify'],
      output: {
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
