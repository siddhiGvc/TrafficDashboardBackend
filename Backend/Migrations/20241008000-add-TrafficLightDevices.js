module.exports = {
    up: (queryInterface, Sequelize) => Promise.all([
      queryInterface.addColumn('TrafficLightDevices', 'Address', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),
      queryInterface.addColumn('TrafficLightDevices', 'City', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),
      queryInterface.addColumn('TrafficLightDevices', 'Lat', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),
      queryInterface.addColumn('TrafficLightDevices', 'Long', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),


    ]),
  
    down: (queryInterface, Sequelize) => Promise.all([
      queryInterface.removeColumn('TrafficLightDevices', 'Address'),
      queryInterface.removeColumn('TrafficLightDevices', 'City'),
      queryInterface.removeColumn('TrafficLightDevices', 'Lat'),
      queryInterface.removeColumn('TrafficLightDevices', 'Long'),
    
    ]),
  };