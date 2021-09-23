'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vocabs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      part: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pronunciation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      note: {
        type: Sequelize.STRING,
        allowNull: false
      },
      english: {
        type: Sequelize.STRING,
        allowNull: false
      },
      chinese: {
        type: Sequelize.STRING,
        allowNull: false
      },
      example1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      example2: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vocabs');
  }
};