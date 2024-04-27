module.exports = {
    up: (queryInterface, Sequelize) => Promise.all([
      queryInterface.addColumn('batteries', 'address', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),


    ]),
  
    down: (queryInterface, Sequelize) => Promise.all([
      queryInterface.removeColumn('batteries', 'address'),
    
    ]),
  };