const fs = require('fs')

module.exports = {
  settings:{
    'import/resolver':{
      'babel-module':{},
    },
  },
  env:{
    browser:true,
    // We need node env because we are doing SSR
    node   :true,
  },
  globals:{
    graphql:'readonly',
  },
  parser :'@babel/eslint-parser',
  extends:['airbnb'],
  plugins:[
    'graphql',
  ],
  rules:{
    semi:[
      2,
      'never',
    ],
    'key-spacing':[
      'error', {
        multiLine:{
          beforeColon:false,
          afterColon :false,
        },
        align:{
          beforeColon:false,
          afterColon :false,
          on         :'colon',
        },
      },
    ],

    'react/require-default-props':[
      0,
    ],
    'react/jsx-props-no-spreading':[
      0,
    ],
    'import/prefer-default-export':[
      0,
    ],
    'react/prop-types':[
      1,
    ],
    'graphql/template-strings':[2, {
      // Import default settings for your GraphQL client. Supported values:
      // 'apollo', 'relay', 'lokka', 'fraql', 'literal'
      env:'relay',

      // Import your schema JSON here
      // schemaJson: require('./schema.graphql'),

      // OR provide absolute path to your schema JSON (but not if using `eslint --cache`!)
      // schemaJsonFilepath: path.resolve(__dirname, './schema.json'),

      // OR provide the schema in the Schema Language format
      schemaString:fs.readFileSync('./schema.graphql', { encoding: 'utf8', flag: 'r' }),

      tagName:'graphql',
      // tagName is set for you to Relay.QL
    }],
  },

}
