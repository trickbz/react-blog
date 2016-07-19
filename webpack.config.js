var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebapckPlugin = new HtmlWebpackPlugin({
    title: 'React Blog',
    template: __dirname + '/src/index.html?[hash]',
    inject: 'body'
});
var CleanWebpackPlugin = require('clean-webpack-plugin');

const developmentMode = 'development';
const NODE_ENV = process.env.NODE_ENV || developmentMode;
const isProd = NODE_ENV !== developmentMode;

module.exports = {
    entry: [
        path.join(__dirname, '/src/js/main.js'),
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server'
    ],
    devServer: {
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: false,
            assets: true,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: false,
            errorDetails: false,
            warnings: false,
            publicPath: false
        },
        hot: true,
        contentBase: path.join(__dirname, '/dist/'),
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    devtool: isProd ? null : 'cheap-inline-module-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets[]=es2015&presets[]=react']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false,
            exclude: ['shared.js']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        htmlWebapckPlugin,
        new webpack.DefinePlugin({
            IS_PRODUCTION: isProd
        })
    ]
};

if (isProd) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}