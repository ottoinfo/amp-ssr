const express = require('express')
const ampRoutesMiddleware = require('./middleware/amp')

const port = 9001
const server = express()

server.use(ampRoutesMiddleware())

server.listen(port)
console.log(`Serving at http://localhost:${port}`)
