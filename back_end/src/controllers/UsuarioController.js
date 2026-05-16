const { Usuario } = require("../index") // el modelo
const jwt = require("jsonwebtoken") // el token
const bcrypt = require("bcrypt") //para encriptar contraseña

const crearUsuario = async (req, res) => {
    try {
        // Agarrar todos los datos
        const { nombre_usuario, email_usuario, clave_usuario, telefono_usuario, imagen_perfil_usuario } = req.body

        // Encriptar la contraseña
        const claveEncriptada = await bcrypt.hash(clave_usuario, 10) // cantidad de rondas que va a encriptar

        // Crear usuario
        const nuevoUsuario = await Usuario.create({
            nombre_usuario,
            email_usuario,
            clave_usuario: claveEncriptada,
            telefono_usuario,
            imagen_perfil_usuario
        })

        res.status(201).json(nuevoUsuario)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const LoginUsuario = async (req, res) => {
    try {
        const {email_usuario, clave_usuario} = req.body

        const usuarioEncontrado = await Usuario.findOne({where:{email_usuario}})

        if(!usuarioEncontrado) {
            return res.status(404).json({message:"Usuario no encontrado"})
        }

        const validarClave = await bcrypt.compare(clave_usuario, usuarioEncontrado.clave_usuario)

        if(!validarClave) {
            return res.status(401).json({message:"Contraseña incorrecta"})
        }

        const token = jwt.sign(
            {id: usuarioEncontrado.id_usuario, email: usuarioEncontrado.email_usuario},"secreto",{expiresIn:"1h"}
        )

        res.json({token})

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const editarUsuario = async (req , res) => {
    try {
        const {id_usuario} = req.params
        const {nombre_usuario, email_usuario, telefono_usuario, imagen_perfil_usuario} = req.body

        const usuarioEncontrado = await Usuario.findByPk(id_usuario)
        if(!usuarioEncontrado) {
            return res.status(404).json({message:"Usuario no encontrado"})
        }
    let updateData = {nombre_usuario, email_usuario, telefono_usuario, imagen_perfil_usuario}

   
    await usuarioEncontrado.update(updateData)
    res.json(usuarioEncontrado)
    res.status(200).json({message:"Usuario actualizado correctamente"})


    } catch (error) {
        console.error("Error al editar el usuario:", error)
        res.status(500).json({message:"Error al editar el usuario"})
    }
}

const eliminarUsuario = async (req, res) => {
    try {
        const {id_usuario} = req.params 
        const usuarioEncontrado = await Usuario.findByPk(id_usuario)
        
        if(!usuarioEncontrado) {
            return res.status(404).json({message:"Usuario no encontrado"})
        }
        await usuarioEncontrado.destroy()
        res.status(200).json({message:"Usuario eliminado correctamente"})
        
    } catch (error) {
        res.status(500).json({message:"Error al eliminar el usuario"})
    }
}


module.exports = {
    crearUsuario,
    LoginUsuario,
    editarUsuario,
    eliminarUsuario
}

