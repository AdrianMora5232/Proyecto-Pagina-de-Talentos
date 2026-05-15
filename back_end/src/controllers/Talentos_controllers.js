const {Talentos} = require('../index')
const jwt = require("jsonwebtoken")

const crearTalento = async (req , res ) => {
    try {
      const {nombre} = req.body
      const nuevoTalento = await Talentos.create({
        nombre
      })
        res.status(201).json( {"talento creado": nuevoTalento})
    } catch (error) {
        res.status(500).json({"no se pudo crear el talento": error.message})
      

    }
}

const obtenerTalentos = async (req, res) => {
      try {
        const talentos = await Talentos.findAll()
        res.status(200).json({"se han encontrado los siguientes talentos": talentos})
      } catch (error) {
        res.status(500).json({"no se pudo obtener los talentos": error.message})
      }

}

const eliminarTalento = async (req , res ) => {
      try {
        const {id_talento} = req.paarams 
        const talentoEncontrado = await Talentos.findByPk(id_talento)
        if(!talentoEncontrado) {
          return res.status(404).json({"no se encontro el talento": error.message})
        }
        await talentoEncontrado.destroy()
        res.status(200).json({"talento eliminado correctamente": talentoEncontrado})
        } catch (error) {
          res.status(500).json({"no se pudo eliminar el talento": error.message})
        
      }
}
 const editarTalento = async (req, res) => {
      try {
      const {id_talento} = req.params
      const {nombre} = req.body
      const talentoEncontrado = await Talentos.findByPk(id_talento)
        if(!talentoEncontrado) {
          return res.status(404).json({"no se encontro el talento": error.message})
        }
        await talentoEncontrado.update({nombre})
        res.status(200).json({"talento actualizado correctamente": talentoEncontrado})
      } catch (error) {
        res.status(500).json({"no se pudo actualizar el talento": error.message})
      
}
 }

 module.exports = {
    crearTalento,
    obtenerTalentos,
    eliminarTalento,
    editarTalento
}




