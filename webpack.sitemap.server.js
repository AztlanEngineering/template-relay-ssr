const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const NodemonPlugin = require('nodemon-webpack-plugin') // Ding
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry:[
    path.resolve(__dirname, 'src/sitemap/server.js'),
  ],

  target:'node',
  externals: [nodeExternals()],

  resolve:{
    extensions:['.ts', '.tsx', '.js', '.jsx'],
  },

  output:{
    path    :path.resolve(__dirname, 'temp/'),
    filename:'sitemap.js',
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
        include: [
          path.resolve(__dirname, "src"),
        ],
        use    :[
          {
            loader:'babel-loader',
          },
        ],
      },

    ],
  },
}
