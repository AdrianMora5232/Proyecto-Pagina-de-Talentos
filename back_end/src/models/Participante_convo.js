const {DataTypes , Model } = require ("sequelize")

const sequelize = require("../config/db")

class Participante_convo extends Model {}

Participante_convo.init({
    id_participante_convo : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true

    }



}, {
    sequelize,
    modelName: "Participante_convo",
    tableName: "participantes_convo",
    timestamps: true
})

module.exports = Participante_convo