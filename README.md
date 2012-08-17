Use
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

