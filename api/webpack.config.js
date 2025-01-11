const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node', // Ensure Webpack targets Node.js environment
  mode: 'development', // Set mode to 'development', 'production', or 'none'
  externals: {
    'mongodb-client-encryption': 'commonjs mongodb-client-encryption', // Ignore native module
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
