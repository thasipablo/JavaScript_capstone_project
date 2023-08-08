const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    contentBase: path.resolve(__dirname, './src'), // Serve static files from src directory
    watchContentBase: true, // Watch for changes in static files
  },
  module: {
    rules: [
      {
        test: /\.(scss)|(css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Leaderboard',
      filename: 'index.html',
      template: './src/template.html',
    }),
  ],
};