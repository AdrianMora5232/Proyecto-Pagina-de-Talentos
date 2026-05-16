const {DataTypes , Model } = require("sequelize")

const sequelize = require("../config/db")


class Componentes_estilos  extends Model {}



Componentes_estilos.init ({
        id_componente_estilo : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        
        },
        color_fondo : {
            type : DataTypes.TEXT,
            allowNull : false
        
        }, 
        imagen_fondo : {
            type : DataTypes.TEXT,
            allowNull : false
        
        }




}, {
    sequelize,
    modelName: "Componentes_estilos",
    tableName: "componentes_estilos",
    timestamps: true

})


module.exports = Componentes_estilos