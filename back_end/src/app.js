const express = require("express")

const app = express()

const sequelize = require("./config/db")

require("./index")

app.use(express.json())
//importar rutas

const usuarioRoutes = require("./routes/UsuarioRoutes")

app.use("/usuarios", usuarioRoutes)

app.listen(3000, () => {
    console.log('servidor corriendo');
})