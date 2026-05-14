const {DataTypes,Model} = require("sequelize")

const sequelize = require("../config/db")

class Reporte_convo extends Model {}


Reporte_convo.init({
    id_reporte_convo :{
    type : DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement : true
  },
  resultado : {
  type : DataTypes.STRING(50),
  allowNull : false
  }
  
}, {
    sequelize,
    modelName: "Reporte_convo",
    tableName: "reportes_convo",
    timestamps: true
})

module.exports = Reporte_convo;