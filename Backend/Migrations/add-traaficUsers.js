

module.exports = {
    up: (queryInterface, Sequelize) => Promise.all([
      queryInterface.addColumn('trafficUsers', 'City', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),
      queryInterface.addColumn('trafficUsers', 'Location', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),
      queryInterface.addColumn('trafficUsers', 'UID', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),
      queryInterface.addColumn('trafficUsers', 'clientName', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),
      queryInterface.addColumn('trafficUsers', 'superAdmin', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),
    ]),
  
    down: (queryInterface, Sequelize) => Promise.all([
      queryInterface.removeColumn('trafficUsers', 'City'),
      queryInterface.removeColumn('trafficUsers', 'Location'),
      queryInterface.removeColumn('trafficUsers', 'UID'),
      queryInterface.removeColumn('trafficUsers', 'clientName'),
      queryInterface.removeColumn('trafficUsers', 'superAdmin'),
      
    ]),
  };