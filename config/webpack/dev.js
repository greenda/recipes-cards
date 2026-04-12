const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const SvgChunkWebpackPlugin = require('svg-chunk-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      // { test: /\.svg$/i, use: 'svg-inline-loader' },
      // {
      //   test: /\.svg$/,
      //   type: 'asset/resource',
      // },
      {
        test: /\.svg/i,
        type: 'asset/source', // Exports the source of the asset as a string
      },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
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
      template: 'src/index.html'
    }),
    // new SvgChunkWebpackPlugin(),
  ],
  devServer: {
    hot: true,
  },
}
