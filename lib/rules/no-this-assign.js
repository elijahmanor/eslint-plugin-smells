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

var ERROR = 'Do not assign this to another variable.';

module.exports = function(context) {
  function checkAssignment(node, value) {
    if (value.type === 'ThisExpression') {
      context.report(node, ERROR);
    }
  }

  return {
    VariableDeclarator: function(node) {
      if (node.init !== null) {
        checkAssignment(node, node.init);
      }
    }
  };
};
