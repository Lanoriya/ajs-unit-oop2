module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    "no-func-assign": "off",
    "no-unused-vars": "off",
    "no-empty": "off",
  },
  plugins: ['jest'],
  settings: {
    jest: {
      version: '29',
    },
  },
};
