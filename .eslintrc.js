module.exports = {
    root: true,

    env: {
        node: true,
    },

    rules: {
        semi: [2, "never"],
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

    extends: [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:prettier/recommended",
        "@vue/prettier",
    ],

    parserOptions: {
        parser: "babel-eslint",
    },
}
