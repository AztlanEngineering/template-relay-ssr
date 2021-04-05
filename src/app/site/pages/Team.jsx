/* @pareto-engineering/generator-front 1.0.7 */
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  Page,
  Title,
} from '@pareto-engineering/design-system'

const Team = () => (
  <Page id="page-team">
    <Page.Section
      id="head"
    >

      <Title
        heading="Team"
        headingAs="h1"
      />
    </Page.Section>
    <Page.Section
      id="main"
    >
      <Link to="/">Back home.</Link>
    </Page.Section>
  </Page>
)

export default Team
