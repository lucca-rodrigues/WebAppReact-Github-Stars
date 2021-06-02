module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier', 'react-hooks', 'jest'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        parser: 'flow',
      },
    ],
    'no-unused-expressions': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/state-in-constructor': [2, 'never'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-quotes': ['error', 'prefer-double'],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['src/*.js', 'src/*.spec.js'],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'react/prop-types': [
      'off',
      { ignore: 'ignore', customValidators: 'customValidator' },
    ],
  },
  ignorePatterns: ['node_modules/', '.next/'],
  settings: {
    'import/resolver': {
      alias: [
        ['components', './components'],
        ['pages', './pages'],
        ['services', './services'],
        ['styles', './styles'],
        ['routes', './routes'],
        ['config', './config'],
        ['assets', './assets'],
      ],
    },
  },
};
