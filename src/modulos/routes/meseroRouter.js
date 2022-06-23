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

module.exports = router;