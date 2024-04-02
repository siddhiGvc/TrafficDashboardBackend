


module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Master', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
        UID:{
            allowNull: false,
        type: Sequelize.STRING,  

        },
        Location:{
            allowNull: false,
        type: Sequelize.STRING,  

        },
        City:{
            allowNull: false,
        type: Sequelize.STRING,  

        },
        Lat:{
            allowNull: false,
        type: Sequelize.STRING,  

        },
      
        Long:{
            allowNull: false,
        type: Sequelize.STRING,  

        },
        State:{
          
        type: Sequelize.STRING,  

        },
        Roads:{
            allowNull: false,
        type: Sequelize.INTEGER,  

        },
        Address:{
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
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Master'),
  };