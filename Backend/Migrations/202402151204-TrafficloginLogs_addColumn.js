module.exports = {
    up: (queryInterface, Sequelize) => Promise.all([
      queryInterface.addColumn('trafficloginLogs', 'Remark', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),

      queryInterface.addColumn('trafficloginLogs', 'MachineNumber', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),

      queryInterface.addColumn('trafficloginLogs', 'deviceModel', {
        type: Sequelize.STRING,
        defaultValue: null
      }),

    ]),
  
    down: (queryInterface, Sequelize) => Promise.all([
      queryInterface.removeColumn('trafficloginLogs', 'Remark'),
      queryInterface.removeColumn('trafficloginLogs', 'MachineNumber'),
      queryInterface.removeColumn('trafficloginLogs', 'deviceModel'),
    ]),
  };
  