const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    inline: true,
    port: 3333,
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ] : [],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?&importLoaders=1&!postcss-loader',
      },
    ],
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

module.exports = config;
