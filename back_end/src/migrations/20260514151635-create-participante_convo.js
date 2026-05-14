'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('participantes_convo', {

      id_participante_convo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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

    await queryInterface.dropTable('participantes_convo');

  }
};
