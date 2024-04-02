
module.exports = {
    up: (queryInterface, Sequelize) => Promise.all([
      queryInterface.addColumn('CurrentStatus', 'Auto/Maunal', {
        type:  Sequelize.BOOLEAN,
        defaultValue: true,
      }),
      queryInterface.addColumn('CurrentStatus', 'Local/Remote', {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      }),
      queryInterface.addColumn('CurrentStatus', 'ManualCommand', {
        type: Sequelize.INTEGER,
        defaultValue: null,
      }),
      queryInterface.addColumn('CurrentStatus', 'Door Status', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),
    ]),
  
    down: (queryInterface, Sequelize) => Promise.all([
      queryInterface.removeColumn('CurrentStatus', 'Auto/Maunal'),
      queryInterface.removeColumn('CurrentStatus', 'Local/Remote'),
      queryInterface.removeColumn('CurrentStatus', 'ManualCommand'),
      queryInterface.removeColumn('CurrentStatus', 'Door Status'),
    ]),
  };