/**
 * Created by yjf on 16-12-15.
 */
'use strict'; //严格模式

var webpack = require('webpack');
var path = require('path');

const config = {
    entry: [
        'webpack-dev-server/client?http://localhost:3002',
        'webpack/hot/only-dev-server',
        './JS/index.js'
    ],
    output: {
        publicPath: "http://localhost:3002/assets",
        filename: '[name].js',
        path: __dirname
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            //.js 文件使用 jsx-loader 来编译处理
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            { test: /\.png|jpg|svg$/, loader: 'url-loader?limit=8192' }
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
        ]
    },
    plugins: [
        new webpack.BannerPlugin('this file is create by lethe'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false,
                drop_debugger:true,
                drop_console:true
            }
        })
    ],
    devServer: {
        inline: true,
        contentBase:'./',
        hot:true,
        publicPath:'/assets',
    }
};

module.exports = config;
