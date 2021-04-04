const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const NodemonPlugin = require('nodemon-webpack-plugin') // Ding
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry:[
    path.resolve(__dirname, 'src/ssr/server.js'),
  ],

  target:'node',
  externals: [nodeExternals({
    // this WILL include `jquery` and `webpack/hot/dev-server` in the bundle, as well as `lodash/*`
    allowlist: [/@pareto-engineering/]
  })],

  resolve:{
    extensions:['.ts', '.tsx', '.js', '.jsx'],
    alias:{
      'react'           :path.resolve('./node_modules/react'),
      'react-dom'       :path.resolve('./node_modules/react-dom'),
      //'react-intl'      :path.resolve('./node_modules/react-intl'),
      'react-router-dom':path.resolve('./node_modules/react-router-dom'),
      'react-ga'        :path.resolve('./node_modules/react-ga')
    }
  },

  output:{
    path    :path.resolve(__dirname, 'temp/'),
    filename:'ssr.js',
    // publicPath:'/'
    // libraryTarget
  },

  mode   :'development',
  devtool:'source-map',

  plugins:[
    new Dotenv({
      path      :'./.env', // load this now instead of the ones in '.env'
      // load '.env.example' to verify '.env' vars are all set. Can be a string to a different file.
      safe      :true,
      // load 'process.env' variables which will trump anything local per dotenv specs.
      systemvars:true,
    }),

    new webpack.ProvidePlugin({
      fetch:['node-fetch', 'default'],
      // ...
    }),

    new NodemonPlugin({
      // If using more than one entry, you can specify
      // which output file will be restarted.
      // script:'./dist/server.js',

      // What to watch.
      watch:path.resolve('./src'),

      // Arguments to pass to the script being watched.
      // args:['demo'],

      // Node arguments.
      // nodeArgs:['--debug=9222'],

      // Files to ignore.
      ignore:['*.js.map', 'node_modules'],

      // Extensions to watch.
      ext:'js,jsx,graphql,jsx',

      // Unlike the cli option, delay here is in milliseconds (also note that it's a string).
      // Here's 1 second delay:
      // delay:'1000',

      // Detailed log.
      verbose:true,

      // Environment variables to pass to the script to be restarted
      /*
      env:{
        NODE_ENV:'development',
        BABEL_DISABLE_CACHE:1,
        SSR:true
      }, */
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
