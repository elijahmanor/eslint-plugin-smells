/**
 * @fileoverview Tests for no-switch rule.
 * @author Elijah Manor
 * @copyright 2015 Elijah Manor. All rights reserved.
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var eslint = require('../../../lib/eslint'),
    ESLintTester = require('eslint-tester');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest('lib/rules/no-switch', {

    // Examples of code that should not trigger the rule
    valid: [
      'function doSomething() { var build, f; if (true) { build = true; } f = build; }',
      'var build; function doSomething() { var f = build; }',
      'function doSomething(e) { }',
      'function doSomething(e) { var f = e; }',
      'function doSomething() { var f = doSomething; }',
      'function foo() { } function doSomething() { var f = foo; }'
    ],

    // Examples of code that should trigger the rule
    invalid: [
        {
          code: 'function doSomething() { var f; if (true) { var build = true; } f = build; }',
          errors: [
            {message: 'build used outside of binding context.', type: 'Identifier'}
          ]
        },
        {
          code: 'function doSomething() { try { var build = 1; } catch (e) { var f = build; } }',
          errors: [
            {message: 'build used outside of binding context.', type: 'Identifier'}
          ]
        }
    ]
});
