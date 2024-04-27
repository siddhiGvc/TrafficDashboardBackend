module.exports = {
    up: (queryInterface, Sequelize) => Promise.all([
      queryInterface.addColumn('batteries', 'beat', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),


    ]),
  
    down: (queryInterface, Sequelize) => Promise.all([
      queryInterface.removeColumn('batteries', 'beat'),
    
    ]),
  };
  