const { DataTypes, Model } = require("sequelize")

const sequelize = require("../config/db")

class Usuario extends Model { }

Usuario.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_usuario: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email_usuario: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    telefono_usuario:{
        type: DataTypes.STRING(50),
        allowNull: true
    },
 
    contrasena_usuario : {
        type : DataTypes.STRING(35),
        allowNull: false
    },
    imagen_perfil_usuario : {
        type : DataTypes.TEXT,
        allowNull: true
    },


  
}, {
    sequelize,
    modelName: "Usuario",
    tableName: "usuarios",
    timestamps: true
})

module.exports = Usuario
