'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('tipos_convo', {

      id_tipo_convo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      nombre: {
        type: Sequelize.STRING(100),
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

    await queryInterface.dropTable('tipos_convo');

  }
};
