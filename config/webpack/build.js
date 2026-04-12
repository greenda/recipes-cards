const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.svg/i, type: 'asset/source' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.html$/i, loader: 'html-loader'},
    ]
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'index_bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    })
  ],
}
