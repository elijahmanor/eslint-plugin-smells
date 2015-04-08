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
    SwitchStatement: function(node) {
      context.report(node, 'Do not assign this to another variable.');
    }
  };
};
