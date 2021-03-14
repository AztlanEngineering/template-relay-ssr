import * as React from 'react'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import environment from '../environment'
import App from '@app/App'

const BaseApp = ({relayEnvironment}) => {
  //
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <App/>
    </RelayEnvironmentProvider>
  )
}

export default BaseApp
