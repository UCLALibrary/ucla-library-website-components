module.exports = {
    root: true,

    env: {
        node: true,
    },

    rules: {
        semi: [2, "never"],
        "no-unused-vars": "off",
        "no-multiple-empty-lines": "error",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },

    parserOptions: {
        parser: "@babel/eslint-parser",
    },

    extends: [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:storybook/recommended",
        "plugin:cypress/recommended",
        "plugin:prettier/recommended",
        "prettier",
    ],
}
