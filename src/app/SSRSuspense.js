import * as React from 'react'

/* eslint-disable import/no-mutable-exports -- required */
let SSRSuspense
if (typeof window === 'undefined') {
  SSRSuspense = (props) => props.children
} else SSRSuspense = React.Suspense

export default SSRSuspense
