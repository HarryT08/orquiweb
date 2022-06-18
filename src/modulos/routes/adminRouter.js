const express = require("express");
const router = express.Router();
const AdminServices = require("./../services/adminServices");
const adminServices = new AdminServices()

//Rutas para las vistas del administrador
router.get('/user', (req, res) => {
    adminServices.getUsers((users) => {
        console.log(users);
        res.render('usuarios', {users});        
    })
});

router.get('/mesa', (req, res) => {
    res.render('mesas');
});

router.get('/producto', (req, res) => {
    res.render('productos');
});

router.get('/estadistica', (req, res) => {
    res.render('estadisticas');
});

router.get('/reserva', (req, res) => {
    res.render('reservas');
});

router.get('/facturar', (req, res) => {
    res.render('facturar');
});

module.exports = router;