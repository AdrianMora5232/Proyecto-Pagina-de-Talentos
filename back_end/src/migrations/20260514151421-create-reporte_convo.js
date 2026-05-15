'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('reportes_convo', {

      id_reporte_convo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      resultado: {
        type: Sequelize.STRING(50),
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

    await queryInterface.dropTable('reportes_convo');

  }
};
