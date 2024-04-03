


module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('NumberPlates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UID: {
        type: Sequelize.STRING,
      },
      R1PRI: {
        type: Sequelize.INTEGER,
      },
      R1SEC: {
        type: Sequelize.INTEGER,
      },
      R1OVE: {
        type: Sequelize.INTEGER,
      },
      R1PED: {
        type: Sequelize.INTEGER,
      },
      R2PRI: {
        type: Sequelize.STRING,
      },
      R2SEC: {
        type: Sequelize.INTEGER,
      },
      R2OVE: {
        type: Sequelize.INTEGER,
      },
      R2PED: {
        type: Sequelize.INTEGER,
      },

      R3PRI: {
        type: Sequelize.INTEGER,
      },
      R3SEC: {
        type: Sequelize.INTEGER,
      },
      R3OVE: {
        type: Sequelize.INTEGER,
      },
      R3PED: {
        type: Sequelize.INTEGER,
      },

      R4PRI: {
        type: Sequelize.INTEGER,
      },
      R4SEC: {
        type: Sequelize.INTEGER,
      },
      R4OVE: {
        type: Sequelize.INTEGER,
      },
      R4PED: {
        type: Sequelize.INTEGER,
      },

      R5PRI: {
        type: Sequelize.INTEGER,
      },
      R5SEC: {
        type: Sequelize.INTEGER,
      },
      R5OVE: {
        type: Sequelize.INTEGER,
      },
      R5PED: {
        type: Sequelize.INTEGER,
      },

      R6PRI: {
        type: Sequelize.INTEGER,
      },
      R6SEC: {
        type: Sequelize.INTEGER,
      },
      R6OVE: {
        type: Sequelize.INTEGER,
      },
      R6PED: {
        type: Sequelize.INTEGER,
      },
    

      R7PRI: {
        type: Sequelize.INTEGER,
      },
      R7SEC: {
        type: Sequelize.INTEGER,
      },
      R7OVE: {
        type: Sequelize.INTEGER,
      },
      R7PED: {
        type: Sequelize.INTEGER,
      },

      R8PRI: {
        type: Sequelize.INTEGER,
      },
      R8SEC: {
        type: Sequelize.INTEGER,
      },
      R8OVE: {
        type: Sequelize.INTEGER,
      },
      R8PED: {
        type: Sequelize.INTEGER,
      },
      lastHeartbeatTime: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('NumberPlates'),
  };