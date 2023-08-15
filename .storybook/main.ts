import type { StorybookConfig } from "@storybook/vue3-vite"
import path from "path"
const { mergeConfig } = require("vite")

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            resolve: {
                alias: {
                    "vue-router": path.resolve(
                        __dirname,
                        "../src/stories/mocks/vue-router.mock.js"
                    ),
                },
            },
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: `
                            @import "ucla-library-design-tokens/scss/fonts.scss";
                            @import "ucla-library-design-tokens/scss/app.scss";
                        `,
                    },
                },
            },
        })
    },
}
export default config
