// config for webpack 4
const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');

const sourcePath = path.join(__dirname, './src');
const outputPath = path.join(__dirname, './dist');

const ThreeEs6Plugin = require('three-es6-plugin/dist');

let plugins = [], outputFile, minimize;
if (env === 'build') {
    minimize = true;
    outputFile = "[name].min.js";
} else {
    minimize = false;
    outputFile = "[name].js";
}

plugins.push(new ThreeEs6Plugin([
    'three/examples/js/controls/OrbitControls.js',
    'three/examples/js/loaders/OBJLoader.js',
    'three/examples/js/loaders/MTLLoader.js',
    'three/examples/js/loaders/DDSLoader.js',
]));
// workaround for infinite watch-compile loop...  https://github.com/webpack/watchpack/issues/25
plugins.push(new webpack.WatchIgnorePlugin([ /three-es6-plugin\/es6\/.*\.js$/, ]));

module.exports = {
    entry: {
        'app': sourcePath + "/index.js",
    },
    stats: {
        warnings: false, // suppress warnings from three-es6-plugin
    },
    output: {
        path: outputPath,
        filename: outputFile,
    },
    optimization: {
        minimize: minimize
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src'),
            path.resolve('../../node_modules'), // need this in case: import ThreeGeo from '../../../src'; // for dev; fast comile
        ],
        extensions: ['.json', '.js']
    },
    plugins: plugins
};
