var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebapckPlugin = new HtmlWebpackPlugin({
    title: 'React Blog',
    template: __dirname + '/src/index.html?[hash]',
    inject: 'body'
});

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    context: path.join(__dirname, '/src/js'),
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './main'
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
        contentBase: './dist'
    },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js?[hash]',
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
        new webpack.HotModuleReplacementPlugin(),
        htmlWebapckPlugin

    ]
};

module.exports = config;