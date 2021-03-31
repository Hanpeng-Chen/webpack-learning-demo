const path = require('path')
const ZipPlugin = require('./plugins/zip-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist')
  },
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src/assets'),
          to: 'assets'
        }
      ]
    }),
    new ZipPlugin({
      filename: 'offline'
    })
  ]
}