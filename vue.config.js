const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:  {
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
    plugins: [new NodePolyfillPlugin()],
  },
})
