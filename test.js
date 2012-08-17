var assert = require('assert');

eval(require('./use.js')('util', 'http'));
eval(require('./use.js')(['url']));

assert.ok(util, 'util module not loaded');
assert.ok(http, 'http module not loaded');
assert.ok(url, 'url module not loaded');

assert.ok(util.debug, 'util.debug not defined');
assert.ok(http.createServer, 'http.createServer not defined');
assert.ok(url.format, 'url.format not defined');

