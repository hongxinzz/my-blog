const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');

//清楚文件操作
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
  plugins: [
    new VueLoaderPlugin(),
    new HTMLPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('/css/style.css')
  ]
}
