module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    'plugin:vue-types/strongly-recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'indent': ['error', 'tab'],
    'max-len': ['error', { code: 200 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [
      'error',
      {
        'props': true,
        'ignorePropertyModificationsFor': [
          'state',
          'req',
          'res',
          'acc',
        ]
      }
    ],
    'no-tabs': 'off',
    'prefer-destructuring': ['error', {
      'object': true,
      'array': false,
    }],
    'vue/html-indent': ['error', 'tab'],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/script-indent': ['error', 'tab', {
      'baseIndent': 1,
      'switchCase': 1,
    }],
    'vue/singleline-html-element-content-newline': 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
