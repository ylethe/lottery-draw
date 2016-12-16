/**
 * Created by yjf on 16-12-16.
 */
'use strict';

var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config');
var open = require('open');

var port = 3002; //设置端口号

/*在 webpack.config.js中将需要的模块entry中增加下面两条设置采用
* only-dev-server而不是dev-server是为了在语法出错的时候不会重载浏览器页面*/

/*config.entry.testModule.unshift(
    'webpack-dev-server/client?http://0.0.0.0:${port}',
    'webpack/hot/only-dev-server'
);*/
// config.output.publicPath = 'http://localhost:${port}/assets';

var compiler = webpack(config);
var server = new WebpackDevServer(compiler,config.devServer);
server.listen(port,()=>{
    open(`http://localhost:${port}`)
});