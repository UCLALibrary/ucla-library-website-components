const path = require("path")
module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: "@storybook/vue",
    core: {
        builder: "@storybook/builder-webpack5",
    },
    // add this function to tweak the webpack config
    webpackFinal: async (config, { configType }) => {
        // the @ alias points to the `src/` directory, a common alias
        // used in the Vue community
        config.resolve.alias["@"] = path.resolve(__dirname, "..", "src")
        config.resolve.alias["node_modules/ucla-library-design-tokens"] =
            path.join(__dirname, "../node_modules/ucla-library-design-tokens")
        // THIS is the tricky stuff!
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: "sass-loader",
                    options: {
                        additionalData:
                            `@import "@/styles/variables-scss.scss";
                             @import "~ucla-library-design-tokens/scss/fonts.scss";`
                    },
                },
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            syntax: require("postcss-scss"),
                            plugins: [
                                [
                                    "postcss-base64",
                                    {
                                        extensions: [".svg"],
                                    },
                                ],
                            ],
                        },
                    },
                },
            ],
            include: path.resolve(__dirname, "../"),
        })
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test.test(".svg")
        )
        fileLoaderRule.exclude = /\.svg$/
        config.module.rules.push({
            test: /\.svg$/,
            loader: "vue-svg-loader",
            options: {
                svgo: {
                    plugins: [
                        {
                            removeViewBox: false,
                        },
                    ],
                },
            },
        })
        // return the updated Storybook configuration
        return config
    },
}
