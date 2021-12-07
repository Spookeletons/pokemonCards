'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pokemon.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    ati: DataTypes.STRING,
    atid: DataTypes.INTEGER,
    atii: DataTypes.STRING,
    atiid: DataTypes.INTEGER,
    atie1: DataTypes.STRING,
    atie2: DataTypes.STRING,
    atie3: DataTypes.STRING,
    atiie1: DataTypes.STRING,
    atiie2: DataTypes.STRING,
    atiie3: DataTypes.STRING,
    weakness: DataTypes.STRING,
    resistance: DataTypes.STRING,
    retreat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemon',
    timestamps: false
  });
  return Pokemon;
};