const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: `${__dirname}/src/`,

  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /(\.css$)/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)$/, loader: 'url-loader?limit=100000' }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  plugins: process.argv.indexOf('-p') === -1 ? [] : [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
};
