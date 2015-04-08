/**
 * @fileoverview Tests for no-switch rule.
 * @author Elijah Manor
 * @copyright 2015 Elijah Manor. All rights reserved.
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var eslint = require('eslint').linter,
  ESLintTester = require('eslint-tester');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var HARMFUL = 'setInterval can be harmful.';
var TYPE = 'CallExpression';
var eslintTester = new ESLintTester(eslint);

eslintTester.addRuleTest('lib/rules/no-setinterval', {
  // Examples of code that should not trigger the rule
  valid: [
    'function doSomething(e) { var f = e; }',
    'function doSomething() { var f = doSomething; }',
    'function foo() { } function doSomething() { var f = foo; }'
  ],
  // Examples of code that should trigger the rule
  invalid: [
    {
      code: 'window.setInterval(function() {}, 1000);',
      errors: [{message: HARMFUL, type: TYPE}]
    },
    {
      code: 'setInterval(function() {}, 1000);',
      errors: [{message: HARMFUL, type: TYPE}]
    }
  ]
});
