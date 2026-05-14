const {DataTypes,Model} = require("sequelize")

const sequelize = require("../config/db")


class Talentos extends Model {}

Talentos.init({
    id_talento:{
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING (100),
        allowNull: false
    }

},{
    sequelize,
    modelName: "Talentos",
    tableName: "talentos",
    timestamps: true
})



module.exports = Talentos