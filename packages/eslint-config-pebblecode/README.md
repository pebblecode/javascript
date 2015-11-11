# eslint-config-pebblecode

This package provides pebblecode's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-pebblecode

Our default export contains all of our ESLint rules, including ES2015
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-pebblecode eslint-plugin-react eslint`
2. add `"extends": "pebblecode"` to your .eslintrc

### eslint-config-pebblecode/basestrict

Lints ES2015 but does not lint React. Requires `eslint`.

1. `npm install --save-dev eslint-config-pebblecode eslint`
2. add `"extends": "pebblecode/base"` to your .eslintrc

### eslint-config-pebblecode/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-pebblecode eslint`
2. add `"extends": "pebblecode/legacy"` to your .eslintrc

See [pebblecode's Javascript styleguide](https://github.com/pebblecode/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like
anything involving regexes. Perhaps in the distant future, we could use literate
programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.

## Contributing

In order to modify this package, you need to clone this repo.

1. Make the changes you wish, including tests
2. Try out the updated rules locally by installing from local dir
3. Submit a PR back to the repo, or if you're flying by the seat of your pants, `GOTO 4`
4. `npm version minor`
5. `npm login` then `npm publish`
6. Commit and push your changes back to the repo

## Changelog

### 1.4.0
- modify indent rule to include `{SwitchCase: 1}`

### 1.3.0
- add babel-eslint as default parser

### 1.0.0
- require `eslint` `v1.0.0` or higher
- removes `babel-eslint` dependency

### 0.1.1
- remove id-length rule (#569)
- enable `no-mixed-spaces-and-tabs` (#539)
- enable `no-const-assign` (#560)
- enable `space-before-keywords` (#554)

### 0.1.0

- switch to modular rules files courtesy the [eslint-config-default][ecd]
  project and [@taion][taion]. [PR][pr-modular]
- export `eslint-config-pebblecode/legacy` for ES5-only users.
  `eslint-config-pebblecode/legacy` does not require the `babel-eslint` parser.
  [PR][pr-legacy]

[ecd]: https://github.com/walmartlabs/eslint-config-defaults
[taion]: https://github.com/taion
[pr-modular]: https://github.com/pebblecode/javascript/pull/526
[pr-legacy]: https://github.com/pebblecode/javascript/pull/527

### 0.0.9

- add rule no-undef
- add rule id-length

### 0.0.8
 - now has a changelog
 - now is modular (see instructions above for with react and without react versions)
