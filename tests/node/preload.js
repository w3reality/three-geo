const path = require('path');

// node: esm-import-dynamic, esm-compat-{require,import-dynamic}
global['THREE'] = require(path.resolve(__dirname, '../../node_modules/three'));

module.exports = undefined;
