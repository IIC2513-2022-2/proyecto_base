'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserMatch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserMatch.init({
    userId: DataTypes.INTEGER,
    matchId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserMatch',
  });
  return UserMatch;
};