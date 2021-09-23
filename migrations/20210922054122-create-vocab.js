'use strict';

const { sequelize } = require("../models");

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
        allowNull: false    //自己手動加入
      },
      part: {
        type: Sequelize.STRING,
        allowNull: false    //自己手動加入
      },
      pronunciation: {
        type: Sequelize.STRING,
        allowNull: false    //自己手動加入
      },
      note: {
        type: Sequelize.STRING,
        allowNull: false    //自己手動加入
      },
      english: {
        type: Sequelize.TEXT,
        allowNull: false    //自己手動加入
      },
      chinese: {
        type: Sequelize.TEXT,
        allowNull: false    //自己手動加入
      },
      example1: {
        type: Sequelize.TEXT,
        allowNull: false    //自己手動加入
      },
      example2: {
        type: Sequelize.TEXT,
        allowNull: false    //自己手動加入
      },
      lastSeen: {
        type: Sequelize.DATE,
        allowNull: false    //自己手動加入
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false    //自己手動加入
      },
      ugly: {
        type: Sequelize.INTEGER,
        allowNull: false    //自己手動加入
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false    //自己手動加入
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false    //自己手動加入
      }
    });
  },

  //下指令時自動產生
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vocabs');
  }
};