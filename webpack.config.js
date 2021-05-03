const path = require('path');
module.exports = {
  mode: 'production',
  entry: {
    login: '/Users/deonte.mohamed/Development/personal_projects/interviewPrep/trelloapp/k6/homepage_load_test.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  target: 'web',
  externals: /k6(\/.*)?/,
};