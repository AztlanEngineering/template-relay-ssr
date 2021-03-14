import * as React from 'react'
import { render } from 'react-dom'
import environment from './environment'

import BaseApp from 'app/BaseApp'

const rootElement = document.getElementById('main')
console.log('whatever2')

//const jsx = BaseApp

/* When main pagedelivered by SSR, not sure why, js is loaded twice for Loadable components
  console.log(rootElement.hasChildNodes(), rootElement.innerHTML) */

render(
  <BaseApp relayEnvironment={ environment }/>,
  rootElement)

if (module.hot) {
  module.hot.accept()
}

