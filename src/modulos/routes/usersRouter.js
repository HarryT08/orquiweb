const express = require("express");
const userServices = require("./../services/userServices");
const router = express.Router();
const service = new userServices();

router.post("/", (req, res) => {
  const { username } = req.body;
  const { password } = req.body;
  let page_render = "notFound";
  if (username && password) {
    service.findOne(
      (user) => {
        if (user) {
          switch (user.rol) {
            case "administrador":
              page_render = "admin";
              break;
            case "mesero":
              page_render = "mesero";
              break;
            case "pase":
              page_render = "pase";
              break;
          }
          res.status(200).json(page_render);
        } else {
          //Caso de no encontrar credenciales en la BD
          res.status(404).json({
            msg: "USUARIO Y/O CONTRASEÑA INCORRECTAS",
          });
        }
      },
      username,
      password
    );
  } else {
    res.render(page_render, { msg: "USUARIO Y/O CONTRASEÑA INCORRECTAS" });
  }
});

module.exports = router;
