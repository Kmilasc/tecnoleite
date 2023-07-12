module.exports = {
    "env": {
      "browser": true,
      "es6": true
    },
    "extends": [
      "plugin:react/recommended",
      "airbnb",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
    "ignorePatterns": ["*.svg", "*.png"],
    "rules": {
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
      "no-plusplus": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "camelcase": "off",
      "react/jsx-props-no-spreading": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-param-reassign": "off",
      "default-param-last": "off",
      "no-underscore-dangle": "off",
      "class-methods-use-this": "off",
      "react/react-in-jsx-scope": "off",
      "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
      "react/require-default-props": "off",
      "no-unused-expressions": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
      "import/prefer-default-export": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never",
          "tsx": "never"
        }
      ],
      "no-use-before-define": "off",
      "prettier/prettier": "error",
      "react/prop-types": [1, { "ignore": ["ignore"], "customValidators": ["customValidator"] }]
    },
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
}
