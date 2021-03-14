import * as React from 'react'
import { useEffect, Suspense } from 'react'
//import { graphql } from 'babel-plugin-relay/macro';

import {
  useQueryLoader,
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
      (queryReference != null || true) && (<>
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

const App = () => {
  //
  return (
    <>
    <h2>Hello application</h2>
    <QueryFetcherExample />
      
    {/*
    <Suspense fallback='Loading'>
    </Suspense>
    */}
    </>
  )
}

export default App
