const path = require('path');

const THREE = require(path.resolve(__dirname, '../../node_modules/three'));
global['THREE'] = THREE; // node: esm-import-dynamic, esm-compat-{require,import-dynamic}
module.exports = THREE; // node: umd-require
