const { resolve, join } = require('path')

const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  devtool: 'cheap-module-eval-source-map',

  entry: ['babel-polyfill', './main.js'],

  output: {
    filename: join('js', 'bundle.js'),
    path: resolve(__dirname, 'dist'),
    publicPath: '',
  },

  context: resolve(__dirname, 'ui'),

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~': resolve(__dirname, 'ui/'),
    },
  },

  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.node$/,
        use: 'node-loader',
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/png',
              name: 'img/[name].[ext]',
              publicPath: '',
            },
          },
        ],
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
              publicPath: '',
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/font-woff',
              name: 'fonts/[name].[ext]',
              publicPath: '',
            },
          },
        ],
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/octet-stream',
              name: 'fonts/[name].[ext]',
              publicPath: '',
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/svg+xml',
              name: 'img/[name].[ext]',
              publicPath: '',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CopyWebpackPlugin([{ from: 'assets', to: './' }]),
  ],
}

module.exports = config
