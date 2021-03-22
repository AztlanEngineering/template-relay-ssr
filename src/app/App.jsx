import * as React from 'react'
import { useEffect, Suspense } from 'react'
import SSRSuspense from 'app/SSRSuspense'
//import { graphql } from 'babel-plugin-relay/macro';

import {
  useQueryLoader,
  useLazyLoadQuery,
  useRelayEnvironment,
  usePreloadedQuery,
} from 'react-relay/hooks';

const query = graphql`
  query AppHelloQuery {
    hello
  }
`;

function QueryFetcherExample() {
  const [
    queryReference,
    loadQuery,
    disposeQuery,
  ] = useQueryLoader(query);

  useEffect(() => {
    loadQuery()
  }, [])

  return (<>
    {
      queryReference == null && (<button
        onClick={() => loadQuery({})}
      >
        Click to reveal the name
      </button>)
    }
    {
      (queryReference != null) && (<>
        <button onClick={disposeQuery}>
          Click to hide the name and dispose the query.
        </button>
    {/*
      */}
        <React.Suspense fallback="Loading">
          <NameDisplay queryReference={queryReference} />
        </React.Suspense>
      </>)
    }
  </>);
}

function NameDisplay({ queryReference }) {
  const data = usePreloadedQuery(query, queryReference);

  return <h1>Query result : { JSON.stringify(data) }</h1>;
}

function FetcherExample() {
    const data = useLazyLoadQuery(
    graphql`
      query AppHelloQuery {
        hello
      }
    `,
    {},
    //{id: 4},
    //{fetchPolicy: 'store-only'},
  );
  return (
    <h1>The result of the query is {JSON.stringify(data)}</h1>

  )
}

const App = () => {
  //const environment = useRelayEnvironment()
  //console.log(2222778877, environment.getStore().getSource())
  //
  return (
    <>
    <h1>Hello application</h1>
    <SSRSuspense>
      <FetcherExample />
    </SSRSuspense>
      
    {/*
    */}
    </>
  )
}

export default App
