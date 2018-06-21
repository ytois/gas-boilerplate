import path from 'path';
import GasPlugin from 'gas-webpack-plugin';

export default {
  mode: 'development',
  entry: './src/index.js',
  devtool: false,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
       {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new GasPlugin()
  ]
};