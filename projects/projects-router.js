const express = require('express')

const router = express.Router()
const projects = require('./projects-model')
 
router.get('/', (req, res) => {
    projects.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;