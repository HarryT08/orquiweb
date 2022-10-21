const express = require("express");
const router = express.Router();
const AdminServices = require("./../services/adminServices");
const adminServices = new AdminServices();

//Rutas para las vistas del administrador
/**
 * ---------------------------------------------------RUTAS PARA ADMINISTRAS USUARIOS-------------------------------------------
**/
router.get('/user', (req, res) => {
    adminServices.getUsers((users) => {
        res.json(users);
    })
});

router.get('/user/:id', (req, res) => {
    let { id } = req.params;
    adminServices.getUser(id, (result) => {
        res.json(result);
    })
})

router.patch('/user/:id', (req, res) => {
    let { id } = req.params;
    adminServices.updateUser(req.body, id, (result) => {
        res.json(result);
    })
})

router.post('/user', (req, res) => {
    adminServices.createUser(req.body, (result) => {        
        if (result === null) {
            res.status(404).json({msg: 'ERROR AL CREAR: USERNAME REPETIDO'});            
        }else{
            res.status(200).json(result);
        }
    })
})

router.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    adminServices.deleteUser((result) => {
        res.json(result);
    }, id)
});

/**
 * -------------------------------------------------RUTAS PARA ADMINISTRAR MESAS-------------------------------------------
**/
router.get('/mesa', (req, res) => {
    adminServices.getMesas((mesas) => {
        res.json(mesas);
    })
});

router.get('/mesa/libre', (req, res) => {
    adminServices.getMesasByEstado('disponible', (mesas) => {
        res.json(mesas);
    })
});

router.get('/mesa/reservada', (req, res) => {
    adminServices.getMesasByEstado('reservada', (mesas) => {
        res.json(mesas);
    })
});

router.get('/mesa/ocupado', (req, res) => {
    adminServices.getMesasByEstado('Ocupado', (mesas) => {
        res.json(mesas);
    })
});

router.delete('/mesa/:id', (req, res) => {
    const { id } = req.params;
    adminServices.deleteMesa((result) => {
        res.json(result);
    }, id)
});

router.patch('/user/:id', (req, res) => {
    let { id } = req.params;
    adminServices.updateProducto(req.body, id, (result) => {
        res.json(result);
    })
})

router.post('/mesa/:id', (req, res) => {
    let {id} = req.params;
    adminServices.updateMesa(id, result => {
        res.json(result);
    });
});

router.post('/mesa', (req, res) => {
    adminServices.createMesa(req.body, result => {
        res.json(result);
    })
})

/**
 * ---------------------------------------------------RUTAS PARA ADMINISTRAR PRODUCTOS-------------------------------------------
**/

router.get('/producto', (req, res) => {
    adminServices.getProductos((productos) => {
        res.json(productos);
    })
});

router.get('/producto/:id', (req, res) => {
    let { id } = req.params;
    adminServices.getProducto(id, (productos) => {
        res.json(productos);
    })
});

router.post('/producto', (req, res) => {
    adminServices.createProducto(req.body, (result) => {
        if (result === 'error') {
            res.status(404).json(result);
        } else {
            res.json(result);
        }
    })
});

router.delete('/producto/:id', (req, res) => {
    const { id } = req.params;
    adminServices.deleteProducto((result) => {
        res.json(result);
    }, id)
});

router.patch('/producto/:id', (req, res) => {
    const { id } = req.params;
    adminServices.updateProducto(req.body, id, (result) => {
        res.json(result);
    })
});

/**
 * ---------------------------------------------------RUTAS PARA GESTIONAR RESERVAS-------------------------------------------
**/
router.get('/reserva/:id', (req, res) => {
    const { id } = req.params;
    const { date } = req.query;
    adminServices.getReserva(id, date, (result) => {
        res.json(result);
    });
});

router.get('/reserva', (req, res) => {
    let { date } = req.query;
    let { timeH } = req.query;
    adminServices.getReservas(date, timeH, (result) => {
        res.json(result);
    });
})

router.post('/reserva', (req, res) => {
    adminServices.createReserva(req.body, (result) => {
        res.json(result);
    })
});

router.delete('/reserva/:id', (req, res) => {
    const { id } = req.params;
    adminServices.deleteReserva(id, (result) => {
        res.status(200).json(result);
    })
});

router.get('/reservaCount', (req, res) => {
    let {fecha} = req.query;
    adminServices.countReserva(fecha, result => {
        res.json(result);
    });
})

/**
 * ---------------------------------------------------OTRAS RUTAS-------------------------------------------
**/

//Ruta para facturar una mesa por el id de la mesa.
router.get('/facturar/:id', (req, res) => {
    let {id} = req.params;
    adminServices.getFactura(id,(result)=>{
        //Agarra el idComanda del primer detalleComanda que halla en el arreglo.
        let idComanda = result[0].idComanda;
        //Actualizamos el estado de la comanda, para evitar refacturación.
        adminServices.updateComanda(idComanda, result => {});
        res.json(result);
    })
});

router.get('/comandaCount', (req, res) => {
    let {fecha} = req.query;
    adminServices.countComanda(fecha, result => {
        res.json(result);
    });
})

router.get('/comandaLast', (req, res) => {
    adminServices.getLast(result => {
        res.json(result);
    })
});

module.exports = router;