const path = require('path');

module.exports = {
  entry: './src/client.js',
  output: {
    path: path.join(__dirname, './public'),
    filename: 'client.js',
    publicPath: "/",
    chunkFilename: '[id].[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
