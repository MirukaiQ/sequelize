'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      RealName: {
        type: Sequelize.STRING(20),
        field: 'real_name',
        allowNull: false,
      },
      originDiscription: {
        type: Sequelize.STRING(400),
        field: 'origin_discription',
        allowNull: true,
      },
      catchPhrase: {
        type: Sequelize.STRING(150),
        field: 'catch_phrase',
        allowNull: true,
      },
      images: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at',
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('heroes');
  }
};