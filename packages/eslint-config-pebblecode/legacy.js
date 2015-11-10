module.exports = {
  'extends': [
    'eslint-config-pebblecode/rules/best-practices',
    'eslint-config-pebblecode/rules/errors',
    'eslint-config-pebblecode/rules/legacy',
    'eslint-config-pebblecode/rules/node',
    'eslint-config-pebblecode/rules/strict',
    'eslint-config-pebblecode/rules/style',
    'eslint-config-pebblecode/rules/variables'
  ],
  'env': {
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },
  'ecmaFeatures': {},
  'globals': {},
  'rules': {}
};
