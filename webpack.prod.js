const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./build-utils/webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].[hash].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              //sourceMap: true,
              publicPath: './dist'
            }
          },
          'css-loader',
        ],
      }
    ],
  },
  //devtool: 'source-map',
});
