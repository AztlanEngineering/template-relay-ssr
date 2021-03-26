import * as React from 'react'
import { render } from 'react-dom'
import BaseApp from 'app/BaseApp'
import environment from './environment'

import('styles/local.scss')

const rootElement = document.getElementById('main')

// const jsx = BaseApp

/* When main pagedelivered by SSR, not sure why, js is loaded twice for Loadable components
  console.log(rootElement.hasChildNodes(), rootElement.innerHTML) */

render(
  <BaseApp relayEnvironment={environment} />,
  rootElement,
)

if (module.hot) {
  module.hot.accept()
}
