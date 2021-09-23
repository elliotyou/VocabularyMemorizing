'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vocab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Vocab.init({
    name: DataTypes.STRING,
    part: DataTypes.STRING,
    pronunciation: DataTypes.STRING,
    note: DataTypes.STRING,
    english: DataTypes.STRING,
    chinese: DataTypes.STRING,
    example1: DataTypes.STRING,
    example2: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vocab',
  });
  return Vocab;
};