var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
    }),
    new webpack.IgnorePlugin(/jsdom$/),
    new webpack.IgnorePlugin(/xmlhttprequest$/)
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(png|jpg|svg|ttf|woff|woff2|eot)$/,
        loader: 'url?limit=25000'
      },
	    {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: path.resolve(__dirname, 'jquery/jquery.min.js'),
        loader: 'expose?jQuery'
      }
    ]
  },
  devServer: {
      historyApiFallback: true
  }
}
