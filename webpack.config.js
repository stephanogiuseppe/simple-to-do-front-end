const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const outputExports = {
  path: __dirname + '/public',
  filename: './app.js'
}

const devServerExports = {
  port: 8080,
  contentBase: './public',
}

const resolveExports = {
  extensions: [ '', '.js', '.jsx' ],
  alias: {
    modules: __dirname + '/node_modules'
  }
}

const moduleExports = {
  loaders: [
    {
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
          presets: [ 'es2015', 'react' ],
          plugins: [ 'transform-object-rest-spread' ]
      }
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    },
    {
      test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
      loader: 'file'
    }
  ]
}

module.exports = {
  entry: './src/index.jsx',
  output: outputExports,
  devServer: devServerExports,
  resolve: resolveExports,
  plugins: [ new ExtractTextPlugin('app.css') ],
  module: moduleExports
}