/* eslint-disable no-console -- Used for monitoring */
/* eslint-disable func-names -- Babel default syntax */
module.exports = function (api) {
  const isProd = api.cache(() => process.env.NODE_ENV === 'production')
  const isSSR = process.env.SSR === 'true'
  // const isSitemap = process.env.SITEMAP === 'true'

  if (process.env.NODE_ENV || process.env.SSR || process.env.SITEMAP) {
    console.log('OK => Compiling in Babel')
    console.log(`OK => NODE_ENV=${process.env.NODE_ENV}`)
    console.log(`OK => SSR=${process.env.SSR}`)
    console.log(`OK => SITEMAP=${process.env.SITEMAP}`)
  }

  const presets = [
    ['@babel/preset-env',
      {
        modules:isSSR ? 'cjs' : false,
      },
    ],
    '@babel/react',
  ]

  const plugins = [
    'relay',
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime:false,
        corejs         :false,
        helpers        :true,
        regenerator    :true,
        useESModules   :true,
        // "version": "7.0.0-beta.0"
      },
    ],
    ['inline-import',
      {
        extensions:[
          '.html',
          '.xml',
        ],
      },
    ],
    [
      'module-resolver', {
        root :['./src'],
        alias:{
          // "@app": "./src/app",
        },
      },
    ],
    '@loadable/babel-plugin',
  ]

  if (isProd) {
    plugins.push(
      'transform-react-remove-prop-types',
    )
  }

  /*
  if (isSSR) {
    plugins.push(
      ['css-modules-transform', {
        extensions:['.css', '.scss'],
        devMode   :true,
        ignore    :'*.styles.scss',
      },
      ],
    )
  } */

  return {
    presets,
    plugins,
  }
}

/*
 // The API exposes the following:

// Cache the returned value forever and don't call this function again.
api.cache(true);

// Don't cache at all. Not recommended because it will be very slow.
api.cache(false);

// Cached based on the value of some function. If this function returns a value different from
// a previously-encountered value, the plugins will re-evaluate.
var env = api.cache(() => process.env.NODE_ENV);

// If testing for a specific env, we recommend specifics to avoid instantiating a plugin for
// any possible NODE_ENV value that might come up during plugin execution.
var isProd = api.cache(() => process.env.NODE_ENV === "production");

// .cache(fn) will perform a linear search though instances to find the matching plugin based
// based on previous instantiated plugins. If you want to recreate the plugin and discard the
// previous instance whenever something changes, you may use:
var isProd = api.cache.invalidate(() => process.env.NODE_ENV === "production");

// Note, we also expose the following more-verbose versions of the above examples:
api.cache.forever(); // api.cache(true)
api.cache.never();   // api.cache(false)
api.cache.using(fn); // api.cache(fn)
*/
