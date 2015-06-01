eslint-plugin-smells
===================

[![Maintenance Status][status-image]][status-url] [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][deps-image]][deps-url] [![Coverage Status][coverage-image]][coverage-url] [![Code Climate][climate-image]][climate-url]

ESLint rules for JavaScript Smells

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

    npm install eslint

If you installed `ESLint` globally, you have to install `eslint-plugin-smells` plugin globally too. Otherwise, install it locally.

    $ npm install eslint-plugin-smells

# Configuration

Add `plugins` section and specify eslint-plugin-smells as a plugin.

```json
{
  "plugins": [
    "smells"
  ]
}
```

Finally, enable all of the rules that you would like to use.

```json
{
  "rules": {
    "smells/no-switch": 1,
    "smells/no-complex-switch-case": 1,
    "smells/no-setinterval": 1,
    "smells/no-this-assign": 1
  }
}
```

# List of supported rules

* [no-switch](docs/rules/no-switch.md):
* [no-complex-switch-case](docs/rules/no-complex-switch-case.md):
* [no-setinterval](docs/rules/no-setinterval.md):
* [no-this-assign](docs/rules/no-this-assign.md):
* [no-complex-string-concat](docs/rules/no-complex-string-concat.md):
* [no-complex-chaining](docs/rules/no-complex-chaining.md):

# License

eslint-plugin-smells is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

[npm-url]: https://npmjs.org/package/eslint-plugin-smells
[npm-image]: http://img.shields.io/npm/v/eslint-plugin-smells.svg?style=flat-square

[travis-url]: https://travis-ci.org/elijahmanor/eslint-plugin-smells
[travis-image]: http://img.shields.io/travis/elijahmanor/eslint-plugin-smells/master.svg?style=flat-square

[deps-url]: https://david-dm.org/elijahmanor/eslint-plugin-smells
[deps-image]: https://img.shields.io/david/dev/elijahmanor/eslint-plugin-smells.svg?style=flat-square

[coverage-url]: https://coveralls.io/r/elijahmanor/eslint-plugin-smells?branch=master
[coverage-image]: http://img.shields.io/coveralls/elijahmanor/eslint-plugin-smells/master.svg?style=flat-square

[climate-url]: https://codeclimate.com/github/elijahmanor/eslint-plugin-smells
[climate-image]: http://img.shields.io/codeclimate/github/elijahmanor/eslint-plugin-smells.svg?style=flat-square

[status-url]: https://github.com/elijahmanor/eslint-plugin-smells/pulse
[status-image]: http://img.shields.io/badge/status-maintained-brightgreen.svg?style=flat-square
