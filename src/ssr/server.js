/* eslint-disable no-console */
// import patchAlias from './patchAlias'
import express from 'express'
import path from 'path'
import serverRenderer from './renderer.js'

const PORT = process.env.PORT || 3003

const app = express()
const router = express.Router()

const logRequestStart = (req, res, next) => {
  // console.info(`${req.method} ${req.originalUrl}`)
  next()
}

app.use(logRequestStart)

console.log(787878, path.resolve(__dirname, '..', 'public'))


router.use('[-a-z1-9\/]+', serverRenderer)
//router.use(express.static(path.resolve(__dirname, '..', '..', 'public')))
router.use(express.static(
  path.resolve(__dirname, '..', 'public'),
  //{ maxAge: '30d' },
))

app.use(router)

app.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error)
  }

  console.log(`🛹 Listening on ${PORT}...`)
})
