'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('componentes', {

      id_componente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      tipo: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      orden: {
        type: Sequelize.INTEGER,
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

    await queryInterface.dropTable('componentes');

  }
};
