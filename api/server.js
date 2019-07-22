const express = require('express')
const server = express()
const cors = require('cors')

server.use(express.json())
server.use(cors())

const projectsRouter = require('../projects/projects-router')
const categoriesRouter = require('../categories/categories-router')

server.use('/api/projects', projectsRouter)
server.use('/api/categories', categoriesRouter)

const repoUrl = `https://github.com/labs14-lambda-app-store`

server.get('/', (req, res) => {
    res.json(`Lambda School Labs 14 - Lambda App Store - GitHub Repo: ${repoUrl}`)
})

module.exports = server;