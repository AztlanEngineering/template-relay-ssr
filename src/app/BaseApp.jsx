import * as React from 'react'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import App from 'app/App'

const BaseApp = ({ relayEnvironment }) => {
  const a = 3
  console.log(a)
  //
  return(
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <App />
    </RelayEnvironmentProvider>
  )
}

export default BaseApp
