'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('batteryTransactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DeviceId: {
        type: Sequelize.INTEGER
      },
      Voltage: {
        type: Sequelize.STRING 
      },
      Current: {
        type: Sequelize.STRING 
      },
      Temperature: {
        type: Sequelize.STRING 
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('batteryTransactions');
  }
};
