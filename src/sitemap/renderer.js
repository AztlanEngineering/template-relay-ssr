/* eslint-disable no-console */
/*
 * lastmod : options
 *
 * always
 * hourly
 * daily
 * weekly
 * monthly
 * yearly
 * never
 *
 *
 *
 * priority :
 * The priority of this URL relative to other URLs on your site.
 * Valid values range from 0.0 to 1.0.
 * This value does not affect how your pages are compared to pages
 * on other sites—it only lets the search engines know which pages
 * you consider the most important for the crawlers.
 * The default priority of a page is 0.5.
*/

import { format } from 'date-fns'
// import { request } from 'graphql-request'

import {
  urljoin as _u,
} from 'utils'

import appConfig from 'app/config'
import * as URLS from 'app/urls'

import template from './template.xml'

const isDebug = process.env.DEBUG === 'TRUE'
const isVerbose = isDebug

const SITE_MAP = {
  HOME:{
    changefreq:'yearly',
    priority  :1,
    lastmod   :new Date('2019-01-31'),
  },
  ABOUT:{
    changefreq:'daily',
    priority  :0.5,
    lastmod   :new Date('2019-01-31'),
  },
}

const defaultProps = {
  changefreq:'monthly',
  priority  :0.5,
  lastmod   :new Date('2020-01-31'),
}

export default async (req, res) => {
  // const today = new Date()

  const paths = [
  ]

  Object.keys(URLS.SITE).forEach((key) => {
    const { changefreq, priority, lastmod } = SITE_MAP[key] || defaultProps
    const loc = URLS.SITE[key]
    paths.push({
      loc,
      lastmod,
      changefreq,
      priority,
    })
  })

  res.setHeader('Content-Type', 'text/xml')

  return res.send(
    template
      .replace('</urlset>', `${paths.reduce((a, {
        loc, lastmod, changefreq, priority,
      }) => {
        if (isVerbose) {
          console.log('LOOP', loc, lastmod, changefreq, priority)
        }
        return `${a
        }
    <url>
      <loc>${loc.length ? _u(appConfig.SITE.CANONICAL, loc) : appConfig.SITE.CANONICAL}</loc>
      <lastmod>${format(lastmod, 'yyyy-MM-dd')}</lastmod>
      ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
      <priority>${priority}</priority>
   </url>`
      }, '')}</urlset>`),
  )
}
