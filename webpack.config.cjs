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
      {
        test: /\.svg$/, // Add rule to handle SVG files
        use: [
          {
            loader: '@svgr/webpack', // Converts SVGs to React components
            options: {
              // Optional configuration for svgr
            },
          },
          'url-loader', // This will handle the SVG as a URL (optional)
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};