'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('convocatorias', {

      id_convocatoria: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false
      },

      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      fecha_cierra: {
        type: Sequelize.DATE,
        allowNull: false
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }

    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('convocatorias');

  }
};
