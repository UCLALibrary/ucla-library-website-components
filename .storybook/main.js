const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  // add this function to tweak the webpack config
  webpackFinal: async (config, { configType }) => {
  // the @ alias points to the `src/` directory, a common alias
    // used in the Vue community
    config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src')

    // THIS is the tricky stuff!
    config.module.rules.push({
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            {
                loader: "sass-loader",
                options: {
                    additionalData: "@import '@/styles/variables-scss.scss';",
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
        use: [
          {
            loader: "vue-svg-loader",
            options: {
              svgo: {
                plugins: [
                  { removeViewBox: false }
                ]
              }
            }
          }
        ]
        
    })

    // return the updated Storybook configuration
    return config
  },
}