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

router.patch('/pedidos/:id' , (req , res) => {
    let { id } = req.params
    paseServices.updatePedido( id , pedido => res.json(pedido) )
})

router.patch('/pedidos/mesas/:id' , (req, res) =>{
    let { id } = req.params
    paseServices.updateMesa(id, (result) => res.json(result))
} )

router.patch('/productos/denegar' , (req , res) => {
    paseServices.denegarProductos(req.body , pedido => res.json(pedido) )
})

router.patch('/pedidos/mensaje/:id' , (req, res) => {
    const { id } = req.params
    paseServices.denegarPedido(id , req.body, result => res.json(result))
})

module.exports = router