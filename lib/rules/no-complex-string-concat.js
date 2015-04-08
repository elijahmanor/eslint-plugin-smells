/**
 * @fileoverview Rule to flag use of `switch` statement
 * @author Elijah Manor
 * @copyright 2015 Elijah Manor. All rights reserved.
 */

'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

// http://eslint.org/docs/rules/consistent-this

var ERROR = 'Too complex string concatenation.';

module.exports = function(context) {
  return {
    BinaryExpression: function(node) {
      if (node.operator === '+' && node.parent.operator === '+') {
        context.report(node, ERROR);
      }
    }
  };
};
