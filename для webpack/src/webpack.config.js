const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/assets/scripts/local/app.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'public'),
    clean: true
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HTMLPlugin({
      template: './src/assets/templates/pages/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: ['file-loader?name=./src/fonts/fonts/geometria-medium.[ttf]']
      },
    ],
  },
  mode: 'development'
}