module.exports = {
    lintOnSave: process.env.NODE_ENV !== "production",
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "@/styles/variables-scss.scss";
              `,
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
                    oneOf: [
                        {
                            test: /\.(jpg|png|svg|gif)$/,
                            type: "asset/inline",
                            resourceQuery: /url/,
                        },
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
            ],
        },
    },
}
