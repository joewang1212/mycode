/**
 * Created by joewang on 17/06/2017.
 */
const path = require('path');
const  htmlWebpackPlugin = require("html-webpack-plugin")

module.exports={
    entry:'./app/index.jsx',
    output:{
        path: path.resolve(__dirname, "build"), // string
        filename:"build.js"
    },
    module:{
        rules: [ {
            test: /\.(css)$/,
            use: ["style-loader","css-loader"]
        },{
            test:"/\.js$/",
            use:['babel-loader']

        } ]

    },
    // devServer: {
    //     contentBase: path.join(__dirname, "dist"),
    //     compress: true,
    //     port: 9000,
    //     hot:true
    // },
    /*plugins:[
        new htmlWebpackPlugin({
            title:"My first app",
            chunk:["index"]
        })
    ]*/
}