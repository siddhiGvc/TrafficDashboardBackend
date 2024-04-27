'use strict';
module.exports = (sequelize, DataTypes) => {
  const batteriesData = sequelize.define('batteriesData', {
    device_number:DataTypes.STRING,
    lastOnTime: DataTypes.DATE,
    lastHeartbeatTime: DataTypes.DATE,
  }, {});
  batteriesData.associate = function(models) {
    // associations can be defined here
  };
  return batteriesData;
};