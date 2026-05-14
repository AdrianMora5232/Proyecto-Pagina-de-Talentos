const { DataTypes , Model } = require ("sequelize")

const sequelize = require ( "../config/db" )



class  Resenas extends Model {}

Resenas.init ({
   id_resena : {
    type : DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement: true
   },
     comentario : {
      type : DataTypes.TEXT,
        allowNull: false
     },
     calificacion : {
        type : DataTypes.INTEGER,
        allowNull: false


     }




}, {
    sequelize,
    modelName: "Resenas",
    tableName: "resenas",
    timestamps: true
})

module.exports = Resenas