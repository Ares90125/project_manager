module.exports = {
  root: true,
  // https://www.npmjs.com/package/@react-native-community/eslint-config
  // In WebStorm, 'extends' 'prettier' removes the yellow bars, whereas the 'rules' sections gets rid of the red
  // squiggles that prettier is going to fix automatically for us (hence there's no point in seeing them).
  extends: ['@react-native-community', 'prettier'],
  // https://eslint.org/docs/user-guide/configuring/rules
  // https://eslint.org/docs/rules/
  rules: {
    'prettier/prettier': 'off',
    quotes: 'off',
    'no-trailing-spaces': 'off',
    semi: 'off',
    // babel-preset-expo automatically converts JSX to JS without the need to
    // import React - see https://github.com/expo/expo/tree/master/packages/babel-preset-expo#jsxruntime
    // Rules taken from https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off', // Prevent React to be marked as unused
    'react/react-in-jsx-scope': 'off', // 'React' must be in scope when using JSX
  },
  globals: {
    // Suppress error "'JSX' is not defined" when using JSX.Element as type.
    // From https://stackoverflow.com/questions/64170868/why-eslint-consider-jsx-or-some-react-types-undefined-since-upgrade-typescript
    JSX: true,
  },
}
