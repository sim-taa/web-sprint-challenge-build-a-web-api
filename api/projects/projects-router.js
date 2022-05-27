// Write your "projects" router here!
const express = require('express');

const router = express.Router();

/*1*/router.get('/', (req, res) => {
    res.json("message from projects router")
})
/*2*/router.get('/:id', (req, res) => {

})

// router.get('/api/projects', (req, res) => {
//     res.json("cool projects")

// })

/*3*/router.post('/', (req, res) => {

})
/*5*/router.delete('/:id', (req, res) => {

})
/*4*/router.put('/:id', (req, res) => {

    })

module.exports = router;