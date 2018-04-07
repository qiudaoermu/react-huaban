var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: ['./index.js']
    },


    output: {
        path: path.resolve(__dirname, './public/__build__'),
        filename: 'bundle.js',
        publicPath: "dist/"

    },
    devServer: {
      // contentBase: './static',
        contentBase: [path.join(__dirname, ".")], // 本地服务器 加载页面 所在的目录
        // port:7000,
        host: '127.0.0.1',
        port: 8099,
        //port: serverConfig.port,
        //host: serverConfig.host,
        hot: true // 服务器热加载
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_modules/
            },
            {
                test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
                loader: 'imports-loader?define=>false&this=>window'
            },
            {
                test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
                loaders: [
                    // 小于10KB的图片会自动转成dataUrl
                    'url?limit=10240&name=img/[hash:8].[name].[ext]',
                    'image?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
