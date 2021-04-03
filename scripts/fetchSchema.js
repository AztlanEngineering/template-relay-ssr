const https = require('https')
const fs = require('fs')

require('dotenv').config({ path: '.env.scripts' })

const {
  GITHUB_BACKEND_ORG,
  GITHUB_BACKEND_REPO,
  GITHUB_READONLY_PAT,
  DEBUG,
} = process.env

const isDebug = DEBUG === 'True'

const host = 'api.github.com'
const contentEndpoint = `/repos/${GITHUB_BACKEND_ORG}/${GITHUB_BACKEND_REPO}/contents/schema.graphql`
const authToken = GITHUB_READONLY_PAT

const defaultBranch = 'development'
const indexOfRefArg = process.argv.findIndex((arg) => arg === '--ref')
const selectedRef = (indexOfRefArg > -1) ? process.argv[indexOfRefArg + 1] : defaultBranch

const filename = 'schema.graphql'

const processContent = (data) => {
  if (data.content) {
    if (isDebug) {
      console.log(Buffer.from(data.content, 'base64').toString('utf-8'))
    }
    fs.writeFile(filename, Buffer.from(data.content, 'base64'), 'utf8', (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log(`${filename} successfully saved`)
      }
    })
  } else {
    console.error('Error in downloading the schema.')
  }
}

function performRequest(success) {
  console.log(`Fetching schema from ref=${selectedRef}`)
  const options = {
    host,
    path   :`${contentEndpoint}?ref=${selectedRef}`,
    method :'GET',
    headers:{
      Authorization:`token ${authToken}`,
      'User-Agent' :'Nodejs CI script',
    },
  }

  const req = https.request(options, (res) => {
    res.setEncoding('utf-8')

    let responseString = ''

    res.on('data', (data) => {
      responseString += data
    })

    res.on('end', () => {
      // console.log(responseString)
      const responseObject = JSON.parse(responseString)
      success(responseObject)
    })
  })

  // req.write()
  req.end()
}

performRequest(processContent)
