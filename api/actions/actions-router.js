const express = require('express');
const Action = require('./actions-model');

const router = express.Router();

/*1*/router.get('/', (req, res) => {
    Action.get()
        .then(found => {
            res.json(found);
        })
        .catch(err => {
            res.status(500).json({
                message: "The actions information could not be retrived.",
                err: err.message,
                stack: err.stack,
            })
        })
})
/*2*/router.get('/:id', (req, res) => {

})
/*3*/router.post('/', (req, res) => {

})
/*5*/router.delete('/:id', (req, res) => {

})
/*4*/router.put('/:id', (req, res) => {

})
/*6*/router.get('/:id/actions', (req, res) => {

})

module.exports = router;