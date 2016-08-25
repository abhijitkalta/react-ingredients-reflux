var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html' ,
  inject: 'body'
});

module.exports = {
  entry: [
   'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
   'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    __dirname + '/app/index.js' ] ,
  module : {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/ ,
        loaders: ['react-hot','babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      }, {
        test: /\.woff$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
      }, {
        test: /\.woff2$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
      }, {
        test: /\.(eot|ttf|svg|gif|png)$/,
        loader: "file-loader"
      }
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  plugins: [ new webpack.HotModuleReplacementPlugin(), HTMLWebpackPluginConfig,
             new webpack.ProvidePlugin({
             $: "jquery",
            jQuery: "jquery"
         })],
  postcss: function () {
        return [precss, autoprefixer];
  }
};
