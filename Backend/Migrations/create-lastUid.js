


module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('lastSelectedUid', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
        lastUid:{
            allowNull: false,
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
    down: (queryInterface, Sequelize) => queryInterface.dropTable('lastSelectedUid'),
  };