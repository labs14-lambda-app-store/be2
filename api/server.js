const express = require('express')
const server = express()
const cors = require('cors')

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.json('Lambda School Labs 14 - Lambda App Store')
})

module.exports = server;