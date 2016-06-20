var path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const JS_BUILD_FILE = 'bundle.js';
const CSS_BUILD_FILE = 'bundle.css';

const APP_DIR = path.resolve(__dirname, 'src');
const APP_ENTRY = path.join(APP_DIR, 'demo/app.js');

var WebpackBuildNotifierPlugin = require('webpack-build-notifier');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(APP_DIR, 'demo/index.html'),
  filename: 'index.html',
  inject: 'body'
});

var config = {
  devtool: 'eval-source-map',
  entry: APP_ENTRY,
  output: {
    path: BUILD_DIR,
    filename: JS_BUILD_FILE
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.styl/,
        loader: 'style?sourceMap!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!stylus-loader'
      }
    ]
  },
  plugins: [
    new WebpackBuildNotifierPlugin(),
    HtmlWebpackPluginConfig
  ]
};

module.exports = config;
