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
  mode: 'development'
}