const { resolve } = require('path')

// If you're reading this file for the first time, please read this toroughly https://mrtnzlml.com/docs/relay

module.exports = {
  src     :resolve(__dirname, './src'),
  schema  :resolve(__dirname, './schema.graphql'),
  exclude :['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  watchman:true,
  verbose :true,
  // language:typescript
}
