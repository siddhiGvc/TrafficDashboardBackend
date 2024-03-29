'use strict';
module.exports = (sequelize, DataTypes) => {
  const trafficloginLogs = sequelize.define('trafficloginLogs', {
    userName : DataTypes.STRING,
    loginLat : DataTypes.STRING,
    loginLong : DataTypes.STRING,
    LoggedInTill: DataTypes.DATE
  }, {});
  trafficloginLogs.associate = function(models) {
    // associations can be defined here
  };
  return trafficloginLogs;
};