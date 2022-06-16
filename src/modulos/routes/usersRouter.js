const express = require("express");
const userServices = require("./../services/userServices");
const router = express.Router();
const service = new userServices();

router.get("/", (req, res) => {
  service.find((result) => {
    res.json(result);
  });
});

router.post("/", (req, res) => {
  const { username } = req.body;
  const { password } = req.body;
  let page_render = "login";
  if (username && password) {
    service.findOne(
      (user) => {
        if (user) {
          switch (user.rol) {
            case "administrador":
              page_render = "home_admin";
              break;
            case "mesero":
              page_render = "home_mesero";
              break;
            case "pase":
              page_render = "home_pase";
              break;
          }
          res.render(page_render, { user });
        } else {
          //Caso de no encontrar credenciales en la BD
          res.render(page_render, {
            msg: "USUARIO Y/O CONTRASEÑA INCORRECTAS",
          });
        }
      },
      username,
      password
    );
  } else {
    // Caso de redireccion al login
    res.render(page_render, { msg: "USUARIO Y/O CONTRASEÑA INCORRECTAS" });
  }
});

module.exports = router;
