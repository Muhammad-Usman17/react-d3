var path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/D3Container/D3Container.js',
  output: {
    path: path.resolve('lib'),
    filename: 'D3Container.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
}
