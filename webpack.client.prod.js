const path = require('path')
const webpack = require('webpack')

const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  entry:[
    path.resolve(__dirname, 'src/client.jsx'),
  ],

  resolve:{
    extensions:['.ts', '.tsx', '.js', '.jsx'],
    alias     :{
      react             :path.resolve('./node_modules/react'),
      'react-dom'       :path.resolve('./node_modules/react-dom'),
      // 'react-intl'      :path.resolve('./node_modules/react-intl'),
      'react-router-dom':path.resolve('./node_modules/react-router-dom'),
      'react-ga'        :path.resolve('./node_modules/react-ga'),
    },
  },

  output:{
    path         :path.resolve(__dirname, 'public/'),
    publicPath   :'/',
    filename     :'[name].js?[hash:8]',
    libraryTarget:'umd',
  },

  devServer:{
    contentBase:[
      path.resolve(__dirname, './public'),
      path.resolve(__dirname, './src/assets/images'),
    ],
    // compress: true,
    port              :3002,
    // hot:true,
    host              :'0.0.0.0',
    disableHostCheck  :true,
    historyApiFallback:true,
  },

  // The following line is a temproary fix for HMR
  // https://stackoverflow.com/questions/64987723/hot-module-replacement-hmr-waiting-for-update-signal-from-wds-forever-ho/64988081#64988081
  target:'web',

  mode:'production',
  // devtool  :'source-map',

  plugins:[
    new Dotenv({
      path      :'./.env', // load this now instead of the ones in '.env'
      // load '.env.example' to verify '.env' vars are all set. Can be a string to a different file.
      safe      :true,
      // load 'process.env' variables which will trump anything local per dotenv specs.
      systemvars:true,
    }),

    new LoadablePlugin(),

    new HtmlWebpackPlugin({
      template:'./src/assets/html/index.html',
    }),

    new MiniCssExtractPlugin({
      filename     :'main.css?[contenthash:5]',
      chunkFilename:'[name].css?[contenthash:5]',
      // chunkFilename:(props) => console.log(props) || '[name].css'
    }),

    new BundleAnalyzerPlugin({
      analyzerMode  :'static',
      reportFilename:('report.prod.html'),
      openAnalyzer  :false,
    }),

  ],

  module:{
    rules:[
      {
        test   :/\.(j|t)s(x?)$/,
        exclude:/node_modules/,
        use    :[
          {
            loader:'babel-loader',
          },
        ],
      },
      {
        test   :/\.js$/,
        use    :['source-map-loader'],
        enforce:'pre',
      },
      {
        test:/\.(s?)css$/i,
        use :[
          {
            loader :MiniCssExtractPlugin.loader,
            options:{
            },
          },
          {
            loader :'css-loader',
            options:{
              url    :false,
              modules:{
                // We only activate CSS modules for the file containing the BEM rules
                auto:(resourcePath) => resourcePath.includes('@pareto-engineering/bem'),
              },
            },
          }, {
            loader:'postcss-loader',
          }, {
            loader :'sass-loader',
            options:{
            },
          },

        ],
      },
    ],
  },
}
