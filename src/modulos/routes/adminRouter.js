const express = require("express");
const router = express.Router();
const AdminServices = require("./../services/adminServices");
const adminServices = new AdminServices()

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
        res.json(result);
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

router.delete('/mesa/:id', (req, res) => {
    const { id } = req.params;
    adminServices.deleteMesa((result) => {
        res.json(result);
    }, id)
});

router.post('/mesa', (req, res) => {
    adminServices.createMesa(req.body, (result) => {
        if (result === 'error') {
            res.status(404).json(result);
        } else {
            res.json(result);
        }
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
/**
 * ---------------------------------------------------OTRAS RUTAS-------------------------------------------
**/

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