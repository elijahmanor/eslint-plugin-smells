/**
 * @fileoverview Rule to flag use of `switch` statement
 * @author Elijah Manor
 * @copyright 2015 Elijah Manor. All rights reserved.
 */

'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      var callee = node.callee;

      if ((callee.type === 'MemberExpression' && callee.property.name === 'setInterval') ||
        (node.type === 'CallExpression' && callee.name === 'setInterval')) {
        context.report(node, 'setInterval can be harmful.');
      }
    }
  };
};
