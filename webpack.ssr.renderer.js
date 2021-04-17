const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const NodemonPlugin = require('nodemon-webpack-plugin') // Ding
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry:[
    path.resolve(__dirname, 'src/ssr/renderer.js'),
  ],

  target:'node',
  /*
  externals: [nodeExternals({
    allowlist: [
      /@pareto-engineering/,
    ]
  })],
  */

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
    path         :path.resolve(__dirname, 'api/'),
    filename     :'ssr.js',
    // publicPath:'/'
    libraryTarget:'commonjs2',
  },

  mode:'production',
  // devtool:'source-map',

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
        // exclude:/node_modules/,
        include:[
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/@pareto-engineering'),
        ],
        use:[
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
                auto            :(resourcePath) => resourcePath.search(/@pareto-engineering[\\/]bem/) > -1,
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
        exclude:/@pareto-engineering[\\/]bem/,
        loader :'ignore-loader',
      },

    ],
  },
}
