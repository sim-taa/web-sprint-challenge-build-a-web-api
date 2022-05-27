// Write your "actions" router here!
const express = require('express');

const router = express.Router();

/*1*/router.get('/', (req, res) => {
    res.json("message from actions router")
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