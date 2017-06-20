module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-native"
  ],
  "rules": {
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-unused-vars": [
      "error",
      {
        "args": "after-used",
        "vars": "all",
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^_"
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 2,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "semi": [
      "error",
      "never"
    ]
  }
}