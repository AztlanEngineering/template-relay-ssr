/* @pareto-engineering/generator-front 0.2.2 */
import * as React from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'

/* eslint-disable react/no-children-prop */
/**
 * **Dependencies : `react-router-dom.Router`,**
 * **`SessionContextProvider` in case you're using PrivateRoutes. **
 * `SwitchRouteMap` generates a routing `Switch` from an array of route Props
 */
const SwitchRouteMap = ({
  routes,
  NotFound,
}) => (
  <Switch
    children={
      [
        ...routes.map(({ isPrivate, ...routeProps }) => (
          <Route
            key={routeProps.path}
            {...routeProps}
          />
        )),
        ...(NotFound
          ? [
            <Route component={NotFound} />,
          ]
          : []),
      ]
    }
  />
)

SwitchRouteMap.propTypes = {
  /**
   * The routes to render
   */
  routes:PropTypes.arrayOf(
    PropTypes.shape({
      path:PropTypes.string.isRequired,
      // title:PropTypes.string.isRequired,
      // state:PropTypes.string.isRequired,
    }),
  ).isRequired,

  /**
   * A component to display in case no route was found.
   * In case you're doing SSR, you might want to use
   * a component that returns a 404 code.
   */
  NotFound:PropTypes.node,
}

export default SwitchRouteMap
