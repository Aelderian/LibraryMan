const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile JS/JSX files
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};