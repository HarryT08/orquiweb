const express = require("express");
const router = express.Router();
const MeseroServices = require("./../services/meseroServices");
const meseroServices = new MeseroServices()

/**
 * ---------------------------------------------------RUTAS PARA COMANDA-------------------------------------------
**/

router.post('/comanda', (req, res)=>{
    meseroServices.createComanda(req.body, (result) => {
        res.json(result);
    })
});

router.post('/detalleComanda', (req, res)=>{
    meseroServices.createDetalle(req.body, (result) => {
        res.json(result);
    })
});

router.get('/rechazados/:id',(req, res) =>{
    let {id} = req.params;
    meseroServices.getRechazados(id, (result) => {
        res.json(result);
    })
})

router.get('/pedidosR/:id',(req, res) =>{
    let {id} = req.params;
    meseroServices.getPedidosRechazados(id, (result) => {
        res.json(result);
    })
})

router.patch('/mesas/:id' , (req, res) =>{
    let { id } = req.params
    meseroServices.updateMesaEstado(id, (result) => res.json(result))
})

module.exports = router;