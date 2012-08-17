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
  'stream',

  'xregexp#XRegExp',

  './helper'
));

util.debug('Easy as pie...');

XRegExp.replace(
  'x-key-lime', 
  XRegExp('\\b\\w', 'g'), 
  function(match) { 
    return match.toUpperCase();
  }
);

helper.doSomethingGrand();
```

### Warning ### 

This module does not work in strict mode. Only enable strict mode, if you need it, *after* the eval statement.

