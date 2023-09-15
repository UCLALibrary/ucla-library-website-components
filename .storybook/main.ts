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
            resolve: {
                alias: {
                    "@": path.resolve(__dirname, "../src/"),
                },
                extensions: [".vue", ".js", ".json"],
            },
        })
    },
}
export default config
