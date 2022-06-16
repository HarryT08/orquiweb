const express = require('express');
const userServices = require('./../services/userServices');
const router = express.Router();
const service = new userServices();


router.get('/', (req, res) => {
    service.find((result) =>{
        res.json(result);
    });
});

router.post('/', (req, res) => {
    const {username} = req.body
    const {password} = req.body
    if(username && password){
        service.findOne(() => { res.render('home') } , username , password)
    }
    else{
        alert('Usuario y/o contraseña incorrecta')
    }
});

module.exports = router;