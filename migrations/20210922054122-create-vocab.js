'use strict';
//這支檔案是執行下方這串字的時候自動產生 
//$ npx sequelize model:generate --name Vocab --attributes name:string,part:string,...
//產生後再做一些微調
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vocabs', {
      //id為自動產生
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false   //我手動加入，不允許留空，因為即使空白我會自己補 --
      },
      part: {
        type: Sequelize.STRING,
        allowNull: false   //我手動加入
      },
      pronunciation: {
        type: Sequelize.STRING,
        allowNull: false   //我手動加入
      },
      note: {
        type: Sequelize.STRING,
        allowNull: false   //我手動加入
      },
      english: {
        type: Sequelize.STRING,
        allowNull: false   //我手動加入
      },
      chinese: {
        type: Sequelize.STRING,
        allowNull: false   //我手動加入
      },
      example1: {
        type: Sequelize.STRING,
        allowNull: false   //我手動加入
      },
      example2: {
        type: Sequelize.STRING,
        allowNull: false   //我手動加入
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

  //下指令時自動產生
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vocabs');
  }
};