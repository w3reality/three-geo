const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const Var2EsmPlugin = require('webpack-var2esm-plugin');

const createConfig = (params) => {
    const modType = params.modtype ? params.modtype : 'umd';
    const libName = params.libname ? params.libname : 'my-mod'; // or pkg.name
    const libObjName = params.libobjname ? params.libobjname : 'MyMod'; // name for script tag loading
    const outDir = path.resolve(params.outdir ? params.outdir : '.');

    const plugins = [];
    const isDev = modType === 'dev';
    let outputFile, minimize, target;
    if (modType === 'umd' || isDev) {
        minimize = !isDev;
        outputFile = `${libName}${isDev ? '.js' : '.min.js'}`;
        target = 'umd';
    } else if (modType === 'esm' || modType === 'esm:compat') {
        const isCompat = modType.endsWith(':compat');
        minimize = true;
        outputFile = libName + (isCompat ? '.esm.compat.js' : '.esm.js');
        target = 'var';
        plugins.push(new Var2EsmPlugin(libObjName, outputFile, isCompat));
    } else {
        console.error('invalid modtype:', modType);
        throw 'exiting...';
    }

    return {
        mode: 'production',
        entry: path.resolve(__dirname + '/src/index.js'),
        externals: { // https://webpack.js.org/configuration/externals/
        },
        output: {
            path: outDir,
            filename: outputFile,
            library: libObjName,
            libraryTarget: target,
            libraryExport: 'default', // https://github.com/webpack/webpack/commit/de8fc51a6fe2aff3ea3a1c24d34d429897c3b694
            umdNamedDefine: false, // must be 'false' for m to be resolved in require([''], (m) => {});
            globalObject: 'typeof self !== \'undefined\' ? self : this' // https://github.com/webpack/webpack/issues/6522 - Can't create UMD build which can be required by Node
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
                        parser: 'babel-eslint'
                    },
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            modules: [
                path.resolve(__dirname + '/node_modules'),
                path.resolve(__dirname + '/src')
            ],
            extensions: ['.json', '.js']
        },
        plugins: plugins
    };
};

const argv = require('yargs').argv;
const config = createConfig({
    modtype: argv.modtype,
    libname: 'three-geo', // or require('./package.json').name
    libobjname: 'ThreeGeo', // name for script tag loading
    outdir: './lib'
});
config['externals'] = {three: 'THREE'};
module.exports = config;
