const express = require('express');
const userServices = require('./../services/userServices');
const router = express.Router();
const service = new userServices();

router.get('/', (req, res) => {
    service.find((result) =>{
        res.json(result);
    });    
});

router.post('/',async (req, res) => {
    const {username} = req.body;
    console.log(username);
});

module.exports = router;