const {Resenas } = require("../index")
const jwt = require("jsonwebtoken")

const crearResena = async (req , res ) => {
    
    try {
        const {comentario , calificacion} = req.body
        const nuevoResena = await Resenas.create({
            comentario,
            calificacion
        })
        res.status(201).json( {"reseña creada": nuevoResena})
    } catch (error) {
        res.status(500).json({"no se pudo crear la reseña": error.message})
    
    }

}
const obtenerResenas = async (req , res ) => {
    try {
        const resenas = await Resenas.findAll()
        res.status(200).json({"se han encontrado las siguientes reseñas": resenas})
    } catch (error) {
        res.status(500).json({"no se pudo obtener las reseñas": error.message})
    }
}

const eliminarResena = async (req , res ) => {
    try {
        const {id_resena} = req.params 
        const resenaEncontrada = await Resenas.findByPk(id_resena)
        if(!resenaEncontrada) {
            return res.status(404).json({"no se encontro la reseña": error.message})
        }
        await resenaEncontrada.destroy()
        res.status(200).json({"reseña eliminada correctamente": resenaEncontrada})
    } catch (error) {
        res.status(500).json({"no se pudo eliminar la reseña": error.message})
    }
}
const editarResena = async (req, res) => {
    try {
        const {id_resena} = req.params
        const {comentario , calificacion} = req.body
        const resenaEncontrada = await Resenas.findByPk(id_resena)
        if(!resenaEncontrada) {
            return res.status(404).json({"no se encontro la reseña": error.message})
        }
        await resenaEncontrada.update({comentario , calificacion})
        res.status(200).json({"reseña actualizada correctamente": resenaEncontrada})
    } catch (error) {
        res.status(500).json({"no se pudo actualizar la reseña": error.message})
    }
}

module.exports = {
    crearResena,
    obtenerResenas,
    eliminarResena,
    editarResena
}