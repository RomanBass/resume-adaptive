const path = require("path");

module.exports = {
  entry: './source/js/modules/main.js',
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build/js'),
  }
}
