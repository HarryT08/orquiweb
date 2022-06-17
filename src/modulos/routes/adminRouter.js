const express = require("express");
const router = express.Router();
const userServices = require("./../services/adminServices");

router.get('/user', (req, res) => {
    res.render('usuarios');
});

router.post('/reciboalgo', (req, res) => {
    console.log('hice algo');
})

module.exports = router;