module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:prettier/recommended",
    ],
    rules: {
        semi: [2, "never"],
        "no-multiple-empty-lines": "error",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
}
