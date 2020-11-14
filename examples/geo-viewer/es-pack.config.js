const path = require('path');
const fs = require('fs');

module.exports = {
    onBundle: (webpackConfig) => {
        webpackConfig.externals = {'three': 'THREE'}; // this makes sure `three.module.js` is not pulled on build
        webpackConfig.resolve.modules.push(path.resolve('../../node_modules'));
        webpackConfig.performance = {hints: false};

        webpackConfig.module.rules[1].exclude = /(node_modules|dom-pixels)/;
    },
};
