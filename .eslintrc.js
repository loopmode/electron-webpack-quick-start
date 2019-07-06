module.exports = {
  extends: ["eslint:recommended"],
  plugins: ["html"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    __static: true
  }
};
