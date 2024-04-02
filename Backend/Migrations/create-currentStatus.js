

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('CurrentStatus', {
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
        type: Sequelize.STRING,
      },
      R1SEC: {
        type: Sequelize.STRING,
      },
      R1OVE: {
        type: Sequelize.STRING,
      },
      R1PED: {
        type: Sequelize.STRING,
      },
      R2PRI: {
        type: Sequelize.STRING,
      },
      R2SEC: {
        type: Sequelize.STRING,
      },
      R2OVE: {
        type: Sequelize.STRING,
      },
      R2PED: {
        type: Sequelize.STRING,
      },

      R3PRI: {
        type: Sequelize.STRING,
      },
      R3SEC: {
        type: Sequelize.STRING,
      },
      R3OVE: {
        type: Sequelize.STRING,
      },
      R3PED: {
        type: Sequelize.STRING,
      },

      R4PRI: {
        type: Sequelize.STRING,
      },
      R4SEC: {
        type: Sequelize.STRING,
      },
      R4OVE: {
        type: Sequelize.STRING,
      },
      R4PED: {
        type: Sequelize.STRING,
      },

      R5PRI: {
        type: Sequelize.STRING,
      },
      R5SEC: {
        type: Sequelize.STRING,
      },
      R5OVE: {
        type: Sequelize.STRING,
      },
      R5PED: {
        type: Sequelize.STRING,
      },

      R6PRI: {
        type: Sequelize.STRING,
      },
      R6SEC: {
        type: Sequelize.STRING,
      },
      R6OVE: {
        type: Sequelize.STRING,
      },
      R6PED: {
        type: Sequelize.STRING,
      },
    

      R7PRI: {
        type: Sequelize.STRING,
      },
      R7SEC: {
        type: Sequelize.STRING,
      },
      R7OVE: {
        type: Sequelize.STRING,
      },
      R7PED: {
        type: Sequelize.STRING,
      },

      R8PRI: {
        type: Sequelize.STRING,
      },
      R8SEC: {
        type: Sequelize.STRING,
      },
      R8OVE: {
        type: Sequelize.STRING,
      },
      R8PED: {
        type: Sequelize.STRING,
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
    down: (queryInterface, Sequelize) => queryInterface.dropTable('CurrentStatus'),
  };