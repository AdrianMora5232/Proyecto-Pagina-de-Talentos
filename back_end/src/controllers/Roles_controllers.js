const {Roles} = require("../index")

const jwt = require("jsonwebtoken")

const crearRol = async (req , res ) => {
      try {
        const {nombre} = req.body
        const nuevoRol = await Roles.create({
          nombre
        })
            res.status(201).json( {"rol creado": nuevoRol})
      } catch (error) {
        res.status(500).json({"no se pudo crear el rol": error.message})
      
      }
}

const obtnerRoles = async (req , res ) => {
    try {
        const roles = await Roles.findAll()
        res.status(200).json({"se han encontrado los siguientes roles": roles})
    } catch (error) {
        res.status(500).json({"no se pudo obtener los roles": error.message})
    }
}
const eliminarRol = async (req , res ) => {
    try {        const {id_rol} = req.params 
        const rolEncontrado = await Roles.findByPk(id_rol)
        if(!rolEncontrado) {
          return res.status(404).json({"no se encontro el rol": error.message})
        }
        await rolEncontrado.destroy()
        res.status(200).json({"rol eliminado correctamente": rolEncontrado})
} catch (error) {
    res.status(500).json({"no se pudo eliminar el rol": error.message})
}
}
   const editarRol = async (req, res) => {
    try {
      const {id_rol} = req.params
      const {nombre} = req.body
      const rolEncontrado = await Roles.findByPk(id_rol)
        if(!rolEncontrado) {
          return res.status(404).json({"no se encontro el rol": error.message})
        }
        await rolEncontrado.update({nombre})
        res.status(200).json({"rol actualizado correctamente": rolEncontrado})
    } catch (error) {
        res.status(500).json({"no se pudo actualizar el rol": error.message})
    }
}
module.exports = {
    crearRol,
    obtnerRoles,
    eliminarRol,
    editarRol
}
