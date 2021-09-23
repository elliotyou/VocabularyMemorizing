'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vocabs', [{
      name: 'octane',
      part: '(n)[U]',
      pronunciation: '/ˈɑːk.teɪn/',
      note: '--',
      english: 'a chemical in petrol',
      chinese: '辛烷',
      example1: '--',
      example2: '--',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vocabs', null, {})
  }
};
