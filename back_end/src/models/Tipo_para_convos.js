const {DataTypes,Model} = require("sequelize")

const sequelize = require("../config/db")

class Tipos_para_convos extends Model {}

Tipos_para_convos.init({
   id_tipo_para_convo : {
    type : DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement: true


   },
   nombre : {
    type : DataTypes.STRING(100),
    allowNull: false
   
   }




},{
    sequelize,
    modelName: "Tipos_para_convos",
    tableName: "tipos_para_convos",
    timestamps: true
})

module.exports = Tipos_para_convos