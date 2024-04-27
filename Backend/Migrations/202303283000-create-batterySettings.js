

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('batterySettings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      minVoltage: {
     
        defaultValue: null,
        type: Sequelize.INTEGER,
      },
      minCurrent: {
     
        defaultValue: null,
        type:  Sequelize.INTEGER,
      },
      maxVoltage: {
       
        defaultValue: null,
        type: Sequelize.INTEGER,
      },
      maxCurrent: {
       
        defaultValue: null,
        type: Sequelize.INTEGER,
      },
      minTemperature: {
       
        defaultValue: null,
        type: Sequelize.INTEGER,
      },
      maxTemperature: {
       
        defaultValue: null,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('batterySettings'),
  };