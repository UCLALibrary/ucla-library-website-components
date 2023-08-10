module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["airbnb", "airbnb-typescript", "airbnb/hooks", "plugin:cypress/recommended", "eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:vue/vue3-essential", "plugin:storybook/recommended"],
  "overrides": [{
    "env": {
      "node": true
    },
    "files": [".eslintrc.{js,cjs}"],
    "parserOptions": {
      "sourceType": "script"
    }
  }],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module",
    "project": './tsconfig.json'
  },
  "plugins": ["@typescript-eslint", "vue"],
  "rules": {}
};