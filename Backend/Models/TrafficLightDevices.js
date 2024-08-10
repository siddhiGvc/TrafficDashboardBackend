'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrafficLightDevices = sequelize.define('TrafficLightDevices', {
    Junction:DataTypes.STRING,
    City:DataTypes.STRING,
    zone:DataTypes.STRING,
    ward:DataTypes.STRING,
    beat:DataTypes.STRING,
    Lat:DataTypes.STRING,
    Long:DataTypes.STRING,
    Address:DataTypes.STRING,
 
    
   
  }, {
    tableName: 'TrafficLightDevices'
  });
  TrafficLightDevices.associate = function(models) {
    // associations can be defined here
  };
  return TrafficLightDevices;
};