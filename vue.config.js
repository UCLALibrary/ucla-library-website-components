module.exports = {
    lintOnSave: process.env.NODE_ENV !== "production",
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "@/styles/variables-scss.scss";
                @import "~ucla-library-design-tokens/scss/fonts.scss";
              `,
            },
            postcss: {
                postcssOptions: {
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
    },
    chainWebpack: (config) => {
        config.module.rules.delete("svg")
    },
    configureWebpack: {
        module: {
            rules: [
                {
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
                },
            ],
        },
    },
}
