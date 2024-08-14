module.exports = {
    up: (queryInterface, Sequelize) => Promise.all([
      queryInterface.addColumn('TrafficCustomerData', 'MachineType', {
        type: Sequelize.STRING,
        defaultValue: null,
      })

    
    ]),
  
    down: (queryInterface, Sequelize) => Promise.all([
      queryInterface.removeColumn('TrafficCustomerData', 'MachineType'),
     
    ]),
  };
  