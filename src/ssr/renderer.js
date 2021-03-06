/* eslint-disable no-console */

/* eslint-disable react/jsx-filename-extension */
// import path from 'path'
import * as React from 'react'
import ReactDOMServer from 'react-dom/server' // Not in use if we use apollo own renderer
//
import ssrPrepass from 'react-ssr-prepass'

import { ChunkExtractor } from '@loadable/server'

import { StaticRouter } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import BaseApp from 'app/BaseApp'

import template from 'assets/html/index.html'
import environment from '../environment'

/*
import styleNames from '@pareto-engineering/bem'
console.log('The two following should return if SSR is \
properly configured with CSS Modules', styleNames, styleNames.base)
*/

// global.fetch = require('node-fetch')

// const statsFile = path.resolve(__dirname, '../public/loadable-stats.json')

import stats from '../../public/loadable-stats.json'
/*
   We create an extractor from the statsFile */

const extractor = new ChunkExtractor({ stats })
const routerContext = {}

export default async (req, res) => {
  //

  const appJsx = extractor.collectChunks(
    <StaticRouter
      location={req.originalUrl || req.url}
      context={routerContext}
    >
      <BaseApp relayEnvironment={environment} />
    </StaticRouter>,
  )
  await ssrPrepass(appJsx)

  // const html = await renderToStringWithData(
  //  extractor.collectChunks(appJsx)
  // )
  const queryRecords = environment.getStore().getSource().toJSON()

  const html = ReactDOMServer.renderToString(
    appJsx,
  )
  /* eslint-disable no-console */
  console.log(`${req.method} ${req.originalUrl || req.url}`)
  console.log(
    JSON.stringify({
      routerContext,
      queryRecords,
    }, null, 2),
  )
  /* eslint-enable no-console */

  // You can now collect your script tags

  const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();
  console.log('SCRIPT', extractor.getScriptTags())

  // You can also collect your "preload/prefetch" links

  const linkTags = extractor.getLinkTags() // or extractor.getLinkElements();
  console.log('LINK', extractor.getLinkTags())

  // And you can even collect your style tags (if you use "mini-css-extract-plugin")

  const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();
  console.log('STYLE', extractor.getStyleTags())

  const helmet = Helmet.renderStatic()

  return res.send(
    template
      .replace('<div id="main"></div>', `<div id="main">${html}</div>`)
      .replace('</body>',
        `${scriptTags
        }<script> window.__RELAY_PAYLOADS__ = ${JSON.stringify(queryRecords)}; </script>`
        + '</body>')
      .replace('<title></title>', linkTags + styleTags + helmet.title.toString() + helmet.meta.toString())
      .replace(/(\r\n|\n|\r)/gm, '') // Minification
      .replace(/\s\s+/g, ''), // Minification
  )
}
