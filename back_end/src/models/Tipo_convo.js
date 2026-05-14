const {DataTypes , Model } = require ("sequelize")

const sequelize = require("../config/db")

class Tipo_convo extends Model {}

  Tipo_convo.init  ({
    id_tipo_convo : {
       type : DataTypes.INTEGER,
       primaryKey : true,
       autoIncrement : true

    },



  }, {
    sequelize,
    modelName: "Tipo_convo",
    tableName: "tipos_convo",
    timestamps: true
  })


module.exports = Tipo_convo