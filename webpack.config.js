const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css','.scss', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      }
    ]
  },
  mode: 'development',
};


