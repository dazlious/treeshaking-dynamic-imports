const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const baseDir = path.resolve(__dirname);

const config = {
  mode: process.env.NODE_ENV,
  stats: 'minimal',
  resolve: {
    extensions: ['.js', '.jsx'],
    symlinks: false,
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'analyze.html',
    }),
  ],
  target: 'web',
  devtool: 'hidden-source-map',
  entry: {
    bundle: [path.resolve(baseDir, 'lib')],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
      }),
    ],
  },
  output: {
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
    path: path.join(baseDir, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /^.*\.jsx?$/,
        include: [path.resolve(baseDir, 'lib')],
        loader: 'babel-loader?cacheDirectory',
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
};

module.exports = config;
