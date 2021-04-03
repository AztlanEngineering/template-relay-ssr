/* eslint-disable no-console */

/* eslint-disable import/no-extraneous-dependencies -- only for dev */
import express from 'express'
/* eslint-enable import/no-extraneous-dependencies */
import renderer from './renderer'

console.log('OK => Loading the sitemap dev server')

const PORT = 3888

const app = express()
const router = express.Router()

const logRequestStart = (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl}`)
  next()
}

app.use(logRequestStart)

/* eslint-disable no-useless-escape -- regex */
router.use('[-a-z1-9\/]+', renderer)
/* eslint-enable no-useless-escape -- regex */

app.use(router)

/* eslint-disable consistent-return */
app.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error)
  }

  console.log(`🛹 Listening on ${PORT}...`)
})
/* eslint-enable consistent-return */
