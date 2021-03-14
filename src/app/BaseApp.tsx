import * as React from 'react'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import environment from '../environment'
import App from '@app/App'

const BaseApp = () => {
  //
  return (
    <RelayEnvironmentProvider environment={environment}>
      <App/>
    </RelayEnvironmentProvider>
  )
}

export default BaseApp
