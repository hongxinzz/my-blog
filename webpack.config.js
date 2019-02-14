const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
//清除文件操作
const CleanWebpackPlugin = require('clean-webpack-plugin');
//分离css
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './dist')
  },
   externals:{
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios': 'axios'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },{
      //匹配vue
      test: /\.vue$/,
      loader: 'vue-loader',
    }, {
      test: /\.js$/,
      loader: 'babel-loader'
    }],
  },
    devServer: {
        proxy: {
            '/api': 'http://127.0.1:8088'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true
        }),
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('dist/css/style.css'),
        new CompressionPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            minRatio: 0.8
        })
  ]
};
