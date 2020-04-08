const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry:  './src/index.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'js/dist')
  },
  devServer: {
    open: true,
    openPage: "index.html",
    watchContentBase: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader,},
          {loader: 'css-loader',},
          {loader: 'postcss-loader',},
          {loader: 'sass-loader',}
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../../assets/style/css/style.css',
    })
  ]
};
