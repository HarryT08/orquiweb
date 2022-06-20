const express = require("express");
const router = express.Router();
const AdminServices = require("./../services/adminServices");
const adminServices = new AdminServices()

//Rutas para las vistas del administrador
router.get('/', (req, res) => {
    adminServices.getUsers((users) => {
        res.json(users);
    })
});

router.get('/user/:id', (req, res) => {
    let {id} = req.params;
    adminServices.getUser(id, (result) => {
        res.json(result);
    })
})

router.patch('/user/:id', (req, res) => {
    let {id} = req.params;
    adminServices.updateUser(req.body, id, (result) => {
        res.json(result);
    })
})

router.post('/user', (req, res) => {
    adminServices.createUser(req.body, (result) =>{
        res.json(result);
    })
})

router.put('/user', (req, res) => {
    adminServices.updateUser(req.body, (result) => {
        res.json(result);
    })
})

router.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    adminServices.deleteUser((result) => {
        console.log(result);
        res.json(result);
    }, id)
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