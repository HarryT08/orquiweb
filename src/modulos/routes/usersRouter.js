const express = require('express');
const userServices = require('./../services/userServices');
const router = express.Router();
const service = new userServices();

router.get('/', (req, res) => {
    service.find((result) =>{
        res.json(result);
    });    
});

module.exports = router;