var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebapckPlugin = new HtmlWebpackPlugin({
    title: 'React Blog',
});

module.exports = {
    entry: [
        './src/js/main.js'
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [htmlWebapckPlugin]
};