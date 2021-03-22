module.exports = {
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  env: {
    browser: true,
    // We need node env because we are doing SSR
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb'],
  rules: {
    semi: [
      0,
    ],
    'react/require-default-props': [
      0,
    ],
    'react/jsx-props-no-spreading': [
      0,
    ],
    'import/prefer-default-export': [
      0,
    ],
  },
};
