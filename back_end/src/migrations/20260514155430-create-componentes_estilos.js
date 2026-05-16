'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('componentes_estilos', {

      id_componente_estilo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      color_fondo: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      imagen_fondo: {
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

    await queryInterface.dropTable('componentes_estilos');

  }
};
