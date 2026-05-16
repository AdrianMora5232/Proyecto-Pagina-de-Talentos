'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {

      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      nombre_usuario: {
        type: Sequelize.STRING(100),
        allowNull: false
      },

      email_usuario: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },

      telefono_usuario: {
        type: Sequelize.STRING(50),
        allowNull: true
      },

      contrasena_usuario: {
        type: Sequelize.STRING(35),
        allowNull: false
      },

      imagen_perfil_usuario: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
