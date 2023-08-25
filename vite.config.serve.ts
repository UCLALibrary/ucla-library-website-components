import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { fileURLToPath, URL } from "url"
import { resolve } from "path"
import svgLoader from "vite-svg-loader"

// https://vitejs.dev/config/
export default defineConfig({
    root: "./dev",
    server: {
        port: 5174,
    },
    plugins: [vue(), svgLoader()],
    css: {
        preprocessorOptions: {
            // Additional Sass options go here
            scss: {
                additionalData: `
                  @import "ucla-library-design-tokens/scss/fonts.scss";
                  @import "ucla-library-design-tokens/scss/app.scss";
                `,
            },
        },
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "~ucla-library-design-tokens": resolve(
                __dirname,
                "node_modules/ucla-library-design-tokens"
            ),
        },
    },
})
