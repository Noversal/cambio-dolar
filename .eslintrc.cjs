module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'jsx'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': 'off',
    quotes: ['error', 'single'],
    semi: 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'
  }
}
