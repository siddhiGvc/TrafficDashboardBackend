

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('batteries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
     
        defaultValue: null,
        type: Sequelize.STRING,
      },
      zone: {
     
        defaultValue: null,
        type:  Sequelize.STRING,
      },
      ward: {
       
        defaultValue: null,
        type: Sequelize.STRING,
      },
      device_number: {
       
        defaultValue: null,
        type: Sequelize.STRING,
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
    down: (queryInterface, Sequelize) => queryInterface.dropTable('batteries'),
  };