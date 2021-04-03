import * as React from 'react'

const Loading = ({ children }) => <h1>{ children }</h1>

Loading.defaultProps = {
  children:'Loading',
}

export default Loading
