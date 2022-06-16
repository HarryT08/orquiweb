const express = require('express');
const userServices = require('./../services/userServices');
const router = express.Router();
const service = new userServices();

router.get('/', (req, res) => {
    const users = service.find();
    res.json(users);
});

module.exports = router;