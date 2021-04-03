/* eslint-disable no-console */

/* eslint-disable import/no-extraneous-dependencies -- only for dev */
import express from 'express'
/* eslint-enable import/no-extraneous-dependencies */
import path from 'path'
import serverRenderer from './renderer'

const PORT = process.env.PORT || 3003

const app = express()
const router = express.Router()

const logRequestStart = (req, res, next) => {
  // console.info(`${req.method} ${req.originalUrl}`)
  next()
}

app.use(logRequestStart)

console.log('Static files are served from :', path.resolve(__dirname, '..', 'public'))

/* eslint-disable no-useless-escape -- regex */
router.use('[-a-z1-9\/]+', serverRenderer)
/* eslint-enable no-useless-escape -- regex */
// router.use(express.static(path.resolve(__dirname, '..', '..', 'public')))
router.use(express.static(
  path.resolve(__dirname, '..', 'public'),
  // { maxAge: '30d' },
))

app.use(router)

/* eslint-disable consistent-return */
app.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error)
  }

  console.log(`🛹 Listening on ${PORT}...`)
})
/* eslint-enable consistent-return */
