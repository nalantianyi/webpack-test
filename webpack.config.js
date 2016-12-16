/**
 * Created by nalantianyi on 2016/12/13.
 */
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: APP_PATH,
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: APP_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            },


        ]
    }
};