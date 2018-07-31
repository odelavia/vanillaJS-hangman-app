const merge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./build-utils/webpack.common');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              sourceMap: true,
              // singleton: true
            }
          },
        ],
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
});
