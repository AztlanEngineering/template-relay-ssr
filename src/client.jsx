import * as React from 'react'
import { render, hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { loadableReady } from '@loadable/component'
import BaseApp from 'app/BaseApp'
import environment from './environment'

import(
  /* webpackPreload:true */
  /* webpackChunkName:'styles' */
  'styles/local.scss'
)

const rootElement = document.getElementById('main')

// const jsx = BaseApp

/* When main pagedelivered by SSR, not sure why, js is loaded twice for Loadable components
  console.log(rootElement.hasChildNodes(), rootElement.innerHTML) */

render(
  <BrowserRouter>
    <BaseApp relayEnvironment={environment} />
  </BrowserRouter>,
  rootElement,
)

loadableReady(() => {
  if (rootElement.hasChildNodes()) {
    hydrate(
      jsx,
      rootElement,
    )
  } else {
    render(
      jsx,
      rootElement,
    )
  }
})

if (module.hot) {
  module.hot.accept()
}
