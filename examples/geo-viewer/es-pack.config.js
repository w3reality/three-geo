const path = require('path');
const fs = require('fs');

module.exports = {
    onBundle: (webpackConfig, webpack) => {
        webpackConfig.externals = {'three': 'THREE'}; // this makes sure `three.module.js` is not pulled on build
        webpackConfig.resolve.modules.push(path.resolve('../../node_modules'));
        webpackConfig.performance = {hints: false};

        webpackConfig.plugins.push(
            new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
            }));
    },
};
