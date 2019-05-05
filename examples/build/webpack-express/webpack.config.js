const path = require('path')
const webpack = require('webpack')
var hotMiddlewareScript = 'webpack-hot-middleware/client'

module.exports = {
  entry: {
    main: ['./src/main.js', hotMiddlewareScript]
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
