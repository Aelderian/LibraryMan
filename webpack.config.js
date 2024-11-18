export default {
  mode: 'development', // or 'production'
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js',
    path: new URL('./dist', import.meta.url).pathname
  },
};