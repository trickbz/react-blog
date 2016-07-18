var path = require('path');
var webpack = require('webpack');
var process = require('process');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebapckPlugin = new HtmlWebpackPlugin({
    title: 'React Blog',
    template: __dirname + '/src/index.html?[hash]',
    inject: 'body'
});

var config = {
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
    devtool: 'source-map',
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
        htmlWebapckPlugin,
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;