Use.js
======

DRY version of require() for Node.js

### Installation ###

```bash
npm install use
```

### Example ###

```javascript
eval(require('use')(
  'util', 
  'http',
  'https',
  'url',
  'path',
  'stream'
));

util.debug('Easy as pie...');
```

Warning: This module does not work in strict mode. Only enable strict mode, if you need it, after the eval statement.

