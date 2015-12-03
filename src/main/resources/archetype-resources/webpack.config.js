const path = require('path');
const Clean = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const SRC_PATH = path.resolve(ROOT_PATH, 'src/web');

module.exports = {
  entry: path.resolve(SRC_PATH, 'index.jsx'),
  output: {
    path: BUILD_PATH,
    filename: "${package}.${pluginClassName}Plugin.[hash].js",
    publicPath: '/plugin/${package}.${pluginClassName}Plugin',
  },
  module: {
    loaders: [
      { test: /\.(woff(2)?|svg|eot|ttf|gif|jpg)(\?.+)?$/, loader: 'file-loader' },
      { test: /\.png$/, loader: 'url-loader' },
      { test: /\.less$/, loaders: ['style', 'css', 'less'] },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.js(x)?$/, loader: 'babel-loader', exclude: /node_modules|\.node_cache/ }
    ],
  },
  plugins: [
    new Clean([BUILD_PATH]),
    new HtmlWebpackPlugin({filename: 'module.json', template: 'templates/module.json.template'}),
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: ['src'],
  },
};
