module.exports = {
    up: (queryInterface, Sequelize) => Promise.all([
      queryInterface.addColumn('TrafficCustomerInfo', 'MachineType', {
        type: Sequelize.STRING,
        defaultValue: null,
      })

    
    ]),
  
    down: (queryInterface, Sequelize) => Promise.all([
      queryInterface.removeColumn('TrafficCustomerInfo', 'MachineType'),
     
    ]),
  };
  