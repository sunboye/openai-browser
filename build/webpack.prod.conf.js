'use strict'
const path = require('path');
const webpack = require('webpack')
// const httpsProxyAgent = require('https-proxy-agent')
// const devServer = require('../devServer.json');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  mode: 'production',
  entry: {
    app: './src/main.js'
  },
  output: {
    // publicPath: '../public',
    // filename: "[name].js",
    path: path.resolve(__dirname, '../dist'),// 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
    filename: "index_dist.js", // 默认是 ./dist/main.js
    clean: true // 自动将上次打包目录资源清空
  },
  externals: {},
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      fs: false,
      crypto: require.resolve("crypto-browserify"),
      tls: false,
      net: false
      // "path-browserify": require.resolve("path-browserify"),
      // "crypto-browserify": require.resolve("crypto-browserify")
    },
  },
  // devServer: {
  //   open: true,//初次打包完成后，自动打开浏览器
  //   hot: true, // 启用 webpack 的 热模块替换 特性
  //   // server: {
  //   //   type: 'https'
  //   // },
  //   proxy: {
  //     '/openapi': {
  //       disableHostCheck: false, // 防止频繁的websocket检查
  //       target: devServer.target,
  //       pathRewrite: devServer.pathRewrite,
  //       agent: devServer.agent ? new httpsProxyAgent(devServer.agent) : {},
  //       overlay: true,
  //       changeOrigin: true,
  //       secure: false
  //     }
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateParameters: {
        BASE_URL: `/`
      },
      inject: true,
      favicon: './favicon.ico',
      template: './index.html'
    }),
    new webpack.DefinePlugin({
      'process.env' : {
        NODE_ENV: '"production"',
        FORCE_DEPEND: false,
        BASE_API: 'window.location.protocol + "//" + window.location.host + "/"'
      }
    }),
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
};
