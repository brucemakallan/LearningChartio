module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    "react"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    indent: [2, 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    curly: [2, "multi-line"],
    "linebreak-style": ["error", "unix"],
    "no-shadow": "warn", // disallow variable declarations from shadowing variables declared in the outer scope
    "eol-last": ["error", "always"], // require newline at the end of files
    "max-len": ["error", { "code": 110 }],
    "no-console": "warn",
    "comma-dangle": ["error", "always-multiline"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", "ts", "tsx"] }],
    "no-underscore-dangle": "warn",
    "no-var": "error",
    "camelcase": ["warn", { "properties": "always" }],
  },
};
