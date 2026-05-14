const {DataTypes,Model} = require ("sequelize")

const sequelize = require("../config/db")


class Portafolios extends Model {}

Portafolios.init ({
  id_portafolio : {
    type : DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement: true

  },
  titulo : {
   type : DataTypes.STRING(100),
    allowNull: false

  },
   descripcion : {
 type : DataTypes.TEXT,
    allowNull: false
   },
   pdf_portafolio : {
    type : DataTypes.TEXT,
    allowNull: false

   },

   imagen_portafolio : {
    type : DataTypes.TEXT,
    allowNull: false

   }



},{
    sequelize,
    modelName: "Portafolios",
    tableName: "portafolios",
    timestamps: true
})



module.exports = Portafolios