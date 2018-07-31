const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name]-[hash:4].[ext]',
                    publicPath: './images'
                },
            },
        ]
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8090
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
