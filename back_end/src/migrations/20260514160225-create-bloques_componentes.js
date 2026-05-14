'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('bloques_componentes', {

      id_bloque_componente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      nombre_bloque: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      Texto_bloque: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      color: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      color_fondo: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      imagen_bloque: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      font_size: {
        type: Sequelize.STRING(20),
        allowNull: false
      },

      bold: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      italic: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      alingn: {
        type: Sequelize.STRING(20),
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

    await queryInterface.dropTable('bloques_componentes');

  }
};