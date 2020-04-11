module.exports = {
  "extends": ["react-native", "airbnb"],
  rules: {
    "semi": ["error", "never"],
    "semi": 0,
    "indent": 0,
    "import/imports-first": ["warn", "DISABLE-absolute-first"],
    "import/no-unresolved": 0,
    "comma-dangle": ["error", "never"],
    "import/newline-after-import": 0,
    "no-undef": 0,
    "no-unused-expressions": 0,
    "no-nested-ternary": 0,
    "no-unneeded-ternary": 0,
    "no-underscore-dangle": 0,
    "react/sort-comp": 0,
    "camelcase": 0,
    "curly": 0,
    "prefer-const": 0,
    "new-cap": 0,
    "no-extra-boolean-cast": 0,
    "object-shorthand": 0,
    "no-param-reassign": 0,
    "no-else-return": 0,
    "no-return-assign": 0,
    "no-useless-constructor": 0,
    "no-confusing-arrow": 0,
    "no-console": 0,
    "prefer-arrow-callback": 0,
    "func-names": 0,
    "max-len": [1, { "code": 150 }],
    "class-methods-use-this": 0,
    "import/no-named-as-default-member": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-indent": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-wrap-multilines": 0,
    "react/jsx-boolean-value": 0,
    "react/no-did-mount-set-state": 0,
    "react/no-unused-prop-types": 0,
    "quotes": ["error", "single"],
    "no-mixed-operators": 0,
    "arrow-body-style": 0,
    "quote-props": 0,
    "import/imports-first": 0,
    "comma-dangle": 0,
    "dot-notation": 0,
    "react/prop-types": 0,
    "object-property-newline": 0,
    "eol-last": 0,
    "spaced-comment": 0,
    "import/no-extraneous-dependencies": 0,
    "global-require": 0
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".json", ".native.js"]
      }
    }
  }
};