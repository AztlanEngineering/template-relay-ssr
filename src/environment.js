/* eslint-disable import/no-extraneous-dependencies -- added via babel */
import 'regenerator-runtime/runtime'
/* eslint-enable import/no-extraneous-dependencies */

import {
  Environment,
  // Network,
  RecordSource,
  Store,
} from 'relay-runtime'

import {
  RelayNetworkLayer,
  urlMiddleware,
  loggerMiddleware,
  errorMiddleware,
  perfMiddleware,
} from 'react-relay-network-modern'

const network = new RelayNetworkLayer([
  urlMiddleware({
    url:process.env.GRAPHQL_ENDPOINT,
  }),
  loggerMiddleware(),
  perfMiddleware(),
  errorMiddleware(),
])
const source = new RecordSource()
const store = new Store(source)

const environment = new Environment({
  network,
  store,
})

export default environment
