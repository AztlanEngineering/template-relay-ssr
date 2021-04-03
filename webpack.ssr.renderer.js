const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const NodemonPlugin = require('nodemon-webpack-plugin') // Ding

module.exports = {
  entry:[
    path.resolve(__dirname, 'src/ssr/renderer.js'),
  ],

  target:'node',

  resolve:{
    extensions:['.ts', '.tsx', '.js', '.jsx'],
  },

  output:{
    path    :path.resolve(__dirname, 'api/'),
    filename:'renderer.js',
    // publicPath:'/'
    libraryTarget:'commonjs2'
    // libraryTarget
  },

  mode   :'production',
  //devtool:'source-map',

  plugins:[
    new Dotenv({
      path      :'./.env.prod', // load this now instead of the ones in '.env'
      // load '.env.example' to verify '.env' vars are all set. Can be a string to a different file.
      safe      :true,
      // load 'process.env' variables which will trump anything local per dotenv specs.
      systemvars:true,
    }),

    new webpack.ProvidePlugin({
      fetch:['node-fetch', 'default'],
      // ...
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
        test:/bem\/index\.(s?)css$/i,
        use :[
          // Creates `style` nodes from JS strings
          // 'style-loader',
          // Translates CSS into CommonJS
          {
            loader :'css-loader',
            options:{
              url    :false,
              modules:{
                // We only activate CSS modules for the file containing the BEM rules
                auto            :(resourcePath) => resourcePath.includes('@pareto-engineering/bem'),
                // exportGlobals: true,
                // namedExport:true,
                exportOnlyLocals:true,
              },
            },
          },

          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test   :/\.(s?)css$/i,
        exclude:/@pareto-engineering\/bem/,
        loader :'ignore-loader',
      },

    ],
  },
}
