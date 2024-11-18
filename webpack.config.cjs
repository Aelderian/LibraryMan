import path from 'path';

export default {
  mode: 'development', // or 'production'
  entry: './src/main.jsx', // Your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(new URL(import.meta.url).pathname, 'dist'),
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