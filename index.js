'use strict';

module.exports = {
  rules: {
    'no-switch': require('./lib/rules/no-switch'),
    'no-complex-switch-case': require('./lib/rules/no-complex-switch-case'),
    'no-setinterval': require('./lib/rules/no-setinterval'),
    'no-this-assign': require('./lib/rules/no-this-assign')
  },
  rulesConfig: {
    'no-switch': 0,
    'no-complex-switch-case': 0,
    'no-setinterval': 0,
    'no-this-assign': 0
  }
};
