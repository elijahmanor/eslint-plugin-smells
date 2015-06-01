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

var ERROR = 'Too complex string concatenation.';
var eslintTester = new ESLintTester(eslint);

eslintTester.addRuleTest('lib/rules/no-complex-chaining', {
  // Examples of code that should not trigger the rule
  valid: [
    'function foo(e) { this.bar(); }',
    'function foo(e) { this.bar().buzz(); }'
  ],
  // Examples of code that should trigger the rule
  invalid: [
    {
      code: 'function foo(e) { this.bar().buzz().baz(); }',
      errors: [{message: ERROR, type: 'CallExpression'}]
    }
  ]
});
