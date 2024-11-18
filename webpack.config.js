module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.js', // or the main entry file of your project
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  // other configurations...
};
