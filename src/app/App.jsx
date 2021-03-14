import * as React from 'react'
import { Suspense } from 'react'
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

  return (<>
    {
      queryReference == null && (<button
        onClick={() => loadQuery({})}
      >
        Click to reveal the name
      </button>)
    }
    {
      queryReference != null && (<>
        <button onClick={disposeQuery}>
          Click to hide the name and dispose the query.
        </button>
        <React.Suspense fallback="Loading">
          <NameDisplay queryReference={queryReference} />
        </React.Suspense>
      </>)
    }
  </>);
}

function NameDisplay({ queryReference }) {
  const data = usePreloadedQuery(query, queryReference);

  return <h1>{ JSON.stringify(data) }</h1>;
}

const App = () => {
  //
  return (
    <>
    <h2>Hello application</h2>
    <Suspense fallback='Loading'>
    <QueryFetcherExample />
      
    </Suspense>
    </>
  )
}

export default App
