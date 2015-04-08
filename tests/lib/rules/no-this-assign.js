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

var ERROR = 'Do not assign this to another variable.';
var eslintTester = new ESLintTester(eslint);

eslintTester.addRuleTest('lib/rules/no-this-assign', {
  // Examples of code that should not trigger the rule
  valid: [
    'function foo(e) { this.bar(); }',
    'function foo(e) { e.forEach(function() {}, this); }',
    'function foo(e) { e.call(this, "test"); }'
  ],
  // Examples of code that should trigger the rule
  invalid: [
    {
      code: 'function foo(e) { var that = this; e.forEach(function() { that.bar(); }); }',
      errors: [{message: ERROR, type: 'VariableDeclarator'}]
    }
  ]
});
