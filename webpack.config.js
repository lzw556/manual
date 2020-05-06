const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry:{
    main: "./src/main.js"
  },
  output:{
    filename:"bundle.js",
    path: path.resolve(__dirname, 'build')
  },
  // module:{
  //   rules:[
  //     {
  //       test: /\.css$/,
  //       use:[
  //         {
  //           loader: "style-loader" 
  //         },
  //         {
  //           loader: "css-loader" 
  //         }
  //       ]
  //     },
  //     {
  //       test: /\.scss$/,
  //       use:[
  //         {
  //           loader: "style-loader"
  //         },
  //         {
  //           loader: "css-loader"
  //         },
  //         {
  //           loader: "sass-loader" 
  //         }
  //       ]
  //     },
  //     {
  //       test:/\.(jpg|png|gif)$/,
  //       loader:"url-loader",
  //       options:{
  //         limit: 8 * 1024,
  //         name: "[hash:10].[ext]"
  //       }
  //     },
  //     {
  //       test :/\.html$/,
  //       loader:"html-loader"   
  //     }
  //   ]
  // },
  plugins:[
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin({})
  ],
  mode:"development"
  ,devServer:{
    contentBase: "./src",
    compress:true, 
    port:10001,  
    open: true
  }
}