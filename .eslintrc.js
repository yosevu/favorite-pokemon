module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["functional"],
  extends: [
    "eslint:recommended",
    "plugin:functional/external-recommended",
    "plugin:functional/recommended",
    "plugin:functional/stylistic",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {},
};
