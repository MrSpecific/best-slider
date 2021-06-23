const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bestSlider.js',
    library: {
      name: 'bestSlider',
      type: 'umd',
    },
    globalObject: 'this',
  },
};
