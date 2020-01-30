// config for webpack 4
const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env;
const pkg = require('./package.json');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const sourcePath = path.join(__dirname, './src');
const outputPath = path.join(__dirname, './dist');

let plugins = [], outputFile, minimize;
if (env === 'build') {
    minimize = true;
    outputFile = "[name].min.js";
    if (0) {
        plugins.push(new BundleAnalyzerPlugin());
    }
} else {
    minimize = false;
    outputFile = "[name].js";
}

module.exports = {
    entry: {
        'app': sourcePath + "/index.js",
    },
    output: {
        path: outputPath,
        filename: outputFile,
    },
    optimization: {
        minimize: minimize,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true
                    }
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                options: { // instead of .babelrc -- https://github.com/babel/babel-loader#usage
                    presets: [['@babel/preset-env', {modules: false}]]
                },
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                options: { // instead of .eslintrc -- https://eslint.org/docs/developer-guide/nodejs-api#cliengine
                    globals: ['THREE', '$', 'Threelet'],
                    parser: 'babel-eslint'
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules'),
            path.resolve('../../node_modules'), // need this in case: import ThreeGeo from '../../../src'; // for dev
        ],
        extensions: ['.json', '.js']
    },
    plugins: plugins
};
