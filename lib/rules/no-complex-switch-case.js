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
    SwitchCase: function(node) {
      var consequent = node.consequent;

      if (consequent.length === 1 && consequent[0].type === 'BlockStatement') {
        consequent = consequent[0].body;
      }

      consequent = consequent.filter(function(item) {
        return item.type !== 'BreakStatement';
      });

      if (consequent.length > 1) {
        context.report(node, 'Case has more than one statement.');
      }
    }
  };
};
