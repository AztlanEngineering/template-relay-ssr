/* @pareto-engineering/generator-front 1.0.7 */
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import SSRSuspense from 'app/SSRSuspense'
import { useLazyLoadQuery } from 'react-relay/hooks'

import {
  Page,
  Title,
  Button,
} from '@pareto-engineering/design-system'

function FetcherExample() {
  const data = useLazyLoadQuery(
    graphql`
      query HomeHelloQuery {
        hello
      }
    `,
    {},
    // {id: 4},
    // {fetchPolicy: 'store-only'},
  )
  return JSON.stringify(data)
}

const Home = () => (
  <Page id="page-home">
    <Page.Section
      id="head"
    >

      <Title
        heading="SSR Template"
        headingAs="h1"
      />
      <Helmet>
        <title>Helmet SSR title</title>
        <meta
          name="description"
          content="This is an example of a meta description.
This will often show up in search results. This is set up using Helmet."
        />

      </Helmet>
    </Page.Section>
    <Page.Section
      id="main"
    >
      <p>
        Welcome to this SSR template.
        Here is a list of features that should work out of the box.
      </p>
      <ul>
        <li>
          GraphQL SSR :
          <code>
            <SSRSuspense fallback="Loading...">
              <FetcherExample />
            </SSRSuspense>
          </code>
          This should also appear in the source code of the page, as well as in
          {' '}
          <code>window.__RELAY_PAYLOADS__</code>
          . Also, if not using SSR mode,
          no queries should be sent over the network (store hydrated from query).
        </li>
        <li>
          Helmet (view source of page. The
          {' '}
          <code>title</code>
          {' '}
          tag should be set up to &quot;Helmet Title&quot;)
        </li>
        <li>
          Preloading of JS and CSS resources. Look at the source code.
          Essential CSS/JS resources should have both a preload link and a loading link.
        </li>
        <li>
          Inclusion of the design system :
          <Button>Test Button</Button>
        </li>
        <li>
          Routing.
          <Link to="/team">Click here to test.</Link>
        </li>
      </ul>
    </Page.Section>
  </Page>
)

export default Home
