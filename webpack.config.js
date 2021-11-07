const path = require('path');
const glob = require("glob");
module.exports = {
  entry: glob.sync('./src/react/**/*.js'),
  output: {
    filename: './react/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  }
}
