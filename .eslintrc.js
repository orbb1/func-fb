module.exports = {
  extends: 'airbnb',
  extends: ['airbnb-base', 'plugin:react/recommended', 'react-app', 'prettier'],
  plugins: ['import'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  rules: {
    'no-plusplus': 'off',
    'default-case': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'one-var': [
      'error',
      {
        initialized: 'never',
      },
    ],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'linebreak-style': ['error', 'windows'],
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'react/jsx-filename-extension': 'off',
    'implicit-arrow-linebreak': 'off',
  },
};
