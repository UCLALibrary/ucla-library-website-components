module.exports = {
    trailingComma: "es5",
    tabWidth: 4,
    semi: false,
    singleQuote: false,
    overrides: [
        {
            files: ["*.yml", "*.yaml"],
            options: {
                useTabs: false, // YAML should always use spaces
                tabWidth: 2,
            },
        },
    ],
};