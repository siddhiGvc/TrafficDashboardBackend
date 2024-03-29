


module.exports = {
    up: (queryInterface, Sequelize) => Promise.all([
      queryInterface.addColumn('trafficUsers', 'verifyToken', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),
      queryInterface.addColumn('trafficUsers', 'isVerified', {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      }),
    ]),
  
    down: (queryInterface, Sequelize) => Promise.all([
      queryInterface.removeColumn('trafficUsers', 'verifyToken'),
      queryInterface.removeColumn('trafficUsers', 'isVerified'),
    ]),
  };