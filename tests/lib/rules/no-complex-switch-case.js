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

var eslintTester = new ESLintTester(eslint);

eslintTester.addRuleTest('lib/rules/no-complex-switch-case', {
  // Examples of code that should not trigger the rule
  valid: [
    'function doSomething(e) { }',
    'function doSomething(e) { var f = e; }',
    'var option = 0; switch(option) { case "a": break; }',
    'var option = 0; switch(option) { case "a": option++; break; }',
    'var option = 0; switch(option) { case "a": option = option + 1; break; }',
    'var option = 0; switch(option) { case "a": { option = option + 1; break; } }',
    'var option = 0; switch(option) { case "a": { \noption = option + 1; \nbreak; \n} }'
  ],
  // Examples of code that should trigger the rule
  invalid: [
    {
      code: 'var option = 0; switch(option) { case "a": option++; option++; break; }',
      errors: [{message: 'Case has more than one statement.', type: 'SwitchCase'}]
    },
    {
      code: 'var option = 0; switch(option) { case "a": option = option + 1; option = option + 1; break; }',
      errors: [{message: 'Case has more than one statement.', type: 'SwitchCase'}]
    },
    {
      code: 'var option = 0; switch(option) { case "a": { option = option + 1; option = option + 1; break; } }',
      errors: [{message: 'Case has more than one statement.', type: 'SwitchCase'}]
    },
    {
      code: 'var option = 0; switch(option) { case "a": {\n option = option + 1; \noption = option + 1; \nbreak; } }',
      errors: [{message: 'Case has more than one statement.', type: 'SwitchCase'}]
    }
  ]
});
