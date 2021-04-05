import {
  // urljoin as _u,
  loadable,
} from 'utils'

import MODULE_URLS from './urls'

// const redeemParam = ':code([0-9a-z-]{64})'

export default [
  {
    path     :MODULE_URLS.HOME,
    component:loadable(() => import(/* webpackChunkName: `app.site` */ './pages/Home.jsx')),
    exact    :true,
  },
  {
    path     :MODULE_URLS.TEAM,
    component:loadable(() => import(/* webpackChunkName: `app.site` */ './pages/Team.jsx')),
  },
]
