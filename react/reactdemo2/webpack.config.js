// webpack.config.js
var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './app/main.jsx', // 入口文件
    devtool: 'source-map',
    　　 // 调试时定位到编译前的代码位置，推荐安装react插件
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: 'bundle.js' // 打包输出的文件
    },
    module: {
        rules: [{
            test: /\.jsx?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }, {
            test: /\.json?$/,
            loader: "json-loader"
        }, {
            test: /\.css?$/,
            loader: "style-loader!css-loader?modules"
        }]
    },
    resolve: {
        // 现在你import文件的时候可以直接使用import Func from './file'，不用再使用import Func from './file.js'
        extensions: ['.js', '.jsx', '.json', '.coffee']
    },
    plugins: [
        // new webpack.BannerPlugin("Copyright Flying Unicorns inc.") //在这个数组中new一个就可以了
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        })
    ],
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, "dist"),
        port: 9999,
        compress: true
    }
};