const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    pages: [path.join(__dirname, 'src', 'pages')],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '',
    libraryTarget: 'commonjs2',
    publicPath: '/',
  },
  target: 'web',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 9001,
  },
}
