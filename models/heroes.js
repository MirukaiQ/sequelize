'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Heroes extends Model {
    static associate(models) {
      Heroes.hasMany(models.Images, {
        foreignKey: 'heroId'
      })
    }
  };
  Heroes.init({
    nickname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
    },
    RealName: {
    type:  DataTypes.STRING,
    allowNull: false,
    field: 'real_name',
    validate: {
      notNull: true,
      notEmpty: true
    }
    },
    originDiscription: {
    type:  DataTypes.STRING,
    allowNull: true,
    field: 'origin_discription',
    },
    catchPhrase: {
    type:  DataTypes.STRING,
    allowNull: true,
    field: 'catch_phrase',
    },
    images: { 
    type:  DataTypes.STRING,
    allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Heroes',
    tableName: 'heroes',
    underscored: true
  });
  return Heroes;
};