// config for webpack 4
const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env;
const pkg = require('./package.json');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
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
            new UglifyJSPlugin({
                uglifyOptions: {
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
