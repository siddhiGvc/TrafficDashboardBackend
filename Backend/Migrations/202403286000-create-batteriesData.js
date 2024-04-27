

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('batteriesData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    
      device_number: {
       
        defaultValue: null,
        type: Sequelize.STRING,
      },
      lastOnTime: {
        allowNull: true,
        type: Sequelize.DATE
      },
      lastHeartbeatTime: {
        allowNull: true,
        type: Sequelize.DATE
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
    down: (queryInterface, Sequelize) => queryInterface.dropTable('batteriesData'),
  };