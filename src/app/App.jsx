import * as React from 'react'
import { useEffect, Suspense } from 'react'
import SSRSuspense from 'app/SSRSuspense'
import { Button, Card } from '@pareto-engineering/design-system'
import { Helmet } from 'react-helmet'
// import { graphql } from 'babel-plugin-relay/macro';

import {
  useQueryLoader,
  useLazyLoadQuery,
  useRelayEnvironment,
  usePreloadedQuery,
} from 'react-relay/hooks'

function FetcherExample() {
  const data = useLazyLoadQuery(
    graphql`
      query AppHelloQuery {
        hello
      }
    `,
    {},
    // {id: 4},
    // {fetchPolicy: 'store-only'},
  )
  return (
    <h1>
      The result of the query is
      {JSON.stringify(data)}
    </h1>

  )
}

const App = () =>
  // const environment = useRelayEnvironment()
  // console.log(2222778877, environment.getStore().getSource())
  //
  (
    <>
      <Helmet>
        <title>This title is set up using react helmet</title>
        <meta name="description" 
content="This is an example of a meta description. 
This will often show up in search results. This is set up using Helmet."/>
        
      </Helmet>
      <h1>Hello application with Helmet</h1>
      <SSRSuspense fallback='Loading...'>
        <FetcherExample />
        <Button className="x-accent1">
          Test
        </Button>
        <Card>
          Test
        </Card>
      </SSRSuspense>

      {/*
    */}
    </>
  )

export default App
