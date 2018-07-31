const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // compress/minify js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./build-utils/webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              importLoaders: 2,
              sourceMap: true,
              publicPath: '/'
            }
          },
          'css-loader',
        ],
      }
    ],
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'dist/[name].[hash].css',
      chunkFilename: 'dist/[id].[hash].css',
    })
  ],
  devtool: 'source-map',
});
