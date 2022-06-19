const express = require("express");
const userServices = require("./../services/userServices");
const router = express.Router();
const service = new userServices();

router.get("/", (req, res) => {
  service.find((result) => {
    console.log(result);
    res.json(result);
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  const { username } = req.body;
  const { password } = req.body;
  let page_render = "notFound";
  if (username && password) {
    service.findOne(
      (user) => {
        if (user) {
          page_render = user.rol
          console.log(page_render);
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
