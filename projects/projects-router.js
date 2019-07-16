const express = require('express')

const router = express.Router()
const projects = require('./projects-model')
 
//endpoint to get all projects
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

//endpoint to post new project
router.post('/', (req, res) => {
    projects.addProject(req.body)
    .then(() => {
        res.status(201).json({ message: 'Project added successfully!'})
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;