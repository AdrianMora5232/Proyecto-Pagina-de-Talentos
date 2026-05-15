'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('portafolios', {

      id_portafolio: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      titulo: {
        type: Sequelize.STRING(100),
        allowNull: false
      },

      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      pdf_portafolio: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      imagen_portafolio: {
        type: Sequelize.TEXT,
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

    await queryInterface.dropTable('portafolios');

  }
};
