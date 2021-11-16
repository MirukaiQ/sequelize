"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    static associate(models) {
      Images.belongsTo(models.Heroes, {
        foreignKey: 'heroId'
      })
    }
  }
  Images.init(
    {
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Images",
      tableName: "images",
      underscored: true,
    }
  );
  return Images;
};
