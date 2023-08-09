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
  },
  module: {
    rules: [
      {
        test: /\.(scss)|(css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: (url, resourcePath) => {
              if (/font/.test(resourcePath)) {
                return `fonts/${url}`;
              }
              return `assets/${url}`;
            },
          },
        }],
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