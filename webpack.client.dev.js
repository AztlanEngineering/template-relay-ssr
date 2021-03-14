const path = require('path')
const webpack = require('webpack')


const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = {
  entry:[
    path.resolve(__dirname, 'src/client.jsx'),
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    /*
    fallback: {
      "fs": false,
      "util": false,
      "path": false,
      "as":false,
      "crypto":false,
    } */

  },

  output:{
    path         :path.resolve(__dirname, 'public/'),
    publicPath   :'/',
    //filename     :'[id].js?[hash:8]',
    libraryTarget:'umd'
  },

  devServer: {
    contentBase: [
      path.resolve(__dirname, './public'),
      path.resolve(__dirname, './src/assets/images'),
    ],
    //compress: true,
    port: 3002,
    hot:true,
    host:'0.0.0.0',
    disableHostCheck  :true
  },

  mode:'development',
  devtool  :'source-map',

  plugins:[

    new Dotenv({
      path: './.env', // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    }),

    new HtmlWebpackPlugin({
      template:'./src/assets/html/index.html'
    }),

    new webpack.HotModuleReplacementPlugin(),

    new BundleAnalyzerPlugin({
      analyzerMode  :'static',
      reportFilename:( 'report.dev.html' ),
      openAnalyzer  :false
    }),


  ],

  module:{
    rules:[
      {
        test: /\.(j|t)s(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ]
      },
      {
        test: /\.js$/,
        //exclude: /node_modules/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
    ]
  }
}



