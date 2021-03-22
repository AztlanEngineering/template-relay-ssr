import * as React from 'react'
let SSRSuspense
if (typeof window === 'undefined') {
  SSRSuspense = props => props.children
}
else SSRSuspense = React.Suspense

export default SSRSuspense
