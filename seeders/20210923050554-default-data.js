'use strict';

const vocabularyList = require('./WordTestSample_v3.json').results

function isInteger(value) {
  return /^\d+$/.test(value);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vocabs',
      vocabularyList.map(vocab => ({
        ...vocab,
        level: isInteger(vocab.level) ? Number(vocab.level) : 0,
        ugly: isInteger(vocab.level) ? Number(vocab.level) : 0,
        createdAt: new Date(),
        updatedAt: new Date()
      })), {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vocabs', null, {})
  }
};
