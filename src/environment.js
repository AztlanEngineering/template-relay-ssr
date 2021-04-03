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

let queryRecords
if (typeof window !== 'undefined') {
  /* eslint-disable no-underscore-dangle -- special case */
  const getRecords = () => window.__RELAY_PAYLOADS__
  /* eslint-enable no-underscore-dangle */
  queryRecords = getRecords()
}

const network = new RelayNetworkLayer([
  urlMiddleware({
    url:process.env.GRAPHQL_ENDPOINT,
  }),
  loggerMiddleware(),
  perfMiddleware(),
  errorMiddleware(),
])
const source = new RecordSource(queryRecords)
const store = new Store(source)

const environment = new Environment({
  network,
  store,
})

export default environment
