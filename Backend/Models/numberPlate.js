'use strict';
module.exports = (sequelize, DataTypes) => {
  const NumberPlates= sequelize.define('NumberPlates', {
    UID:DataTypes.STRING,
    R1PRI:DataTypes.INTEGER,
    R1SEC:DataTypes.INTEGER,
    R1OVE:DataTypes.INTEGER,
    R1PED:DataTypes.INTEGER,
    R2PRI:DataTypes.INTEGER,
    R2SEC:DataTypes.INTEGER,
    R2OVE:DataTypes.INTEGER,
    R2PED:DataTypes.INTEGER,
    R3PRI:DataTypes.INTEGER,
    R3SEC:DataTypes.INTEGER,
    R3OVE:DataTypes.INTEGER,
    R3PED:DataTypes.INTEGER,
    R4PRI:DataTypes.INTEGER,
    R4SEC:DataTypes.INTEGER,
    R4OVE:DataTypes.INTEGER,
    R4PED:DataTypes.INTEGER,
    R5PRI:DataTypes.INTEGER,
    R5SEC:DataTypes.INTEGER,
    R5OVE:DataTypes.INTEGER,
    R5PED:DataTypes.INTEGER,
    R6PRI:DataTypes.INTEGER,
    R6SEC:DataTypes.INTEGER,
    R6OVE:DataTypes.INTEGER,
    R6PED:DataTypes.INTEGER,
    R7PRI:DataTypes.INTEGER,
    R7SEC:DataTypes.INTEGER,
    R7OVE:DataTypes.INTEGER,
    R7PED:DataTypes.INTEGER,
    R8PRI:DataTypes.INTEGER,
    R8SEC:DataTypes.INTEGER,
    R8OVE:DataTypes.INTEGER,
    R8PED:DataTypes.INTEGER,
    lastHeartbeatTime: DataTypes.DATE,
    
  }, {
    tableName: 'NumberPlates',
    timestamps: true,
  });

 

  return NumberPlates;
};