const express = require("express")

const router = express.Router()

const {
    crearUsuario,
    LoginUsuario
} = require("../controllers/UsuarioController.js")

router.post("/crear", crearUsuario)

router.post("/login", LoginUsuario)

module.exports = router;
