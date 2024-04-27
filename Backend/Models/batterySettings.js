'use strict';
module.exports = (sequelize, DataTypes) => {
  const batterySettings = sequelize.define('batterySettings', {
    minVoltage:DataTypes.INTEGER,
    maxVoltage:DataTypes.INTEGER,
    minCurrent:DataTypes.INTEGER,
    maxCurrent:DataTypes.INTEGER,
    minTemperature:DataTypes.INTEGER,
    maxTemperature:DataTypes.INTEGER,
  
  }, {});
  batterySettings.associate = function(models) {
    // associations can be defined here
  };
  return batterySettings;
};