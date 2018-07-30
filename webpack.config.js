const path = require('path')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: path.join(__dirname, '../public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        },
        {
          test: /\.(jpg|png|gif|svg|pdf|ico)$/,
          use: [
              {
                  loader: 'file-loader',
                  options: {
                      name: '[path][name]-[hash:4].[ext]',
                      publicPath: 'assets/img'
                  },
              },
          ]
        },
      ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}