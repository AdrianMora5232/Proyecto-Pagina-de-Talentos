const {DataTypes, Model} = require("sequelize")

const sequelize = require("../config/db")

class Roles extends Model {}

Roles.init({
    id_rol : {
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
    modelName: "Roles",
    tableName: "roles",
    timestamps: true



})

module.exports = Roles