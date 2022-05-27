// Write your "projects" router here!
const express = require('express');
const Project = require('./projects-model');

const router = express.Router();

/*1*/router.get('/', (req, res) => {
    Project.get()
        .then(found => {
          res.json(found);
        })
        .catch(err => {
            res.status(500).json({
                message: "The projects information could not be retrived.",
                err: err.message,
                stack: err.stack,
            })
        })
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