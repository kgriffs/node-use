var util = require('util');

exports = module.exports = function use(moduleNames) {
  var script = '';
  moduleNames = Array.isArray(moduleNames) ? moduleNames : [].slice.call(arguments);

  moduleNames.forEach(function (m) {
    script += util.format('var %s = require("%s");\n', m, m);
  })

  return script;
}
