const express = require("express");
const router = express.Router();
const PaseServices = require("./../services/paseServices");
const paseServices = new PaseServices()

router.get('/pedidos' , (req , res) => {
    paseServices.getPedidos( pedidos => res.json(pedidos) )
})


router.get('/pedidos/:id' , (req , res) => {
    let { id } = req.params
    paseServices.getProductos(id, productos => res.json(productos) )
})

router.delete('/pedidos/:id' , (req , res) => {
    let { id } = req.params
    paseServices.deletePedido( id , pedido => res.json(pedido) )
})


module.exports = router