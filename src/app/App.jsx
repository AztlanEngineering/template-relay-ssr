import * as React from 'react'
import { SwitchRouteMap } from '@pareto-engineering/design-system'
// import { graphql } from 'babel-plugin-relay/macro';

import routes from './routes'


const App = () => {
  console.log('Launching the app')
  return (
    <>
      <SwitchRouteMap routes={ routes } />
    </>
  )
}

export default App
