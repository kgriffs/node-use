var util = require('util');
var path = require('path');

exports = module.exports = function use(moduleNames) {
  var script = '';
  moduleNames = Array.isArray(moduleNames) ? moduleNames : [].slice.call(arguments);

  moduleNames.forEach(function (m) {
    var tokens = m.split('#');
    
    if (tokens.length === 2) {
      var moduleName = tokens[0];
      var className = tokens[1];

      script += util.format(
        'var %s = require("%s").%s',
        className, moduleName, className)
    }
    else {
      script += util.format(
        'var %s = require("%s"); ', 
        path.basename(m), m);
    }
  })

  return script;
}
