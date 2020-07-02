const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('css-loader');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

};
