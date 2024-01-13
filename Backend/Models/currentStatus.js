'use strict';
module.exports = (sequelize, DataTypes) => {
  const CurrentStatus = sequelize.define('CurrentStatus', {
    UID:DataTypes.STRING,
    R1PRI:DataTypes.STRING,
    R1SEC:DataTypes.STRING,
    R1OVE:DataTypes.STRING,
    R1PED:DataTypes.STRING,
    R2PRI:DataTypes.STRING,
    R2SEC:DataTypes.STRING,
    R2OVE:DataTypes.STRING,
    R2PED:DataTypes.STRING,
    R3PRI:DataTypes.STRING,
    R3SEC:DataTypes.STRING,
    R3OVE:DataTypes.STRING,
    R3PED:DataTypes.STRING,
    R4PRI:DataTypes.STRING,
    R4SEC:DataTypes.STRING,
    R4OVE:DataTypes.STRING,
    R4PED:DataTypes.STRING,
    R5PRI:DataTypes.STRING,
    R5SEC:DataTypes.STRING,
    R5OVE:DataTypes.STRING,
    R5PED:DataTypes.STRING,
    R6PRI:DataTypes.STRING,
    R6SEC:DataTypes.STRING,
    R6OVE:DataTypes.STRING,
    R6PED:DataTypes.STRING,
    R7PRI:DataTypes.STRING,
    R7SEC:DataTypes.STRING,
    R7OVE:DataTypes.STRING,
    R7PED:DataTypes.STRING,
    R8PRI:DataTypes.STRING,
    R8SEC:DataTypes.STRING,
    R8OVE:DataTypes.STRING,
    R8PED:DataTypes.STRING,
    
  }, {
    tableName: 'CurrentStatus',
    timestamps: true,
  });

 

  return CurrentStatus;
};