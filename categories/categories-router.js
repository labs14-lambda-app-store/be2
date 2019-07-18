const express = require('express')

const router = express.Router()
const categories = require('./categories-model')
 
//endpoint to get all categories
router.get('/', (req, res) => {
    categories.getCategories()
    .then(categories => {
        res.status(200).json(categories)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;