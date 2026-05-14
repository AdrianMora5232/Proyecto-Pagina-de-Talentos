const {DataTypes, Model } = require ("sequelize")

const sequelize = require("../config/db")

class Componentes extends Model {}

Componentes.init ({
   id_componente : {
   type : DataTypes.INTEGER,
   primaryKey : true,
   autoIncrement : true
   },
   tipo : {
    type : DataTypes.STRING(50),
    allowNull : false
   },
   orden : {
     type : DataTypes.INTEGER,
     allowNull : false
   
   }





}, {
    sequelize,
    modelName: "Componentes",
    tableName: "componentes",
    timestamps: true

})

module.exports = Componentes