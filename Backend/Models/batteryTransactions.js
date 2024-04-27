'use strict';
module.exports = (sequelize, DataTypes) => {
  const batteryTransactions = sequelize.define('batteryTransactions', {
    DeviceId: DataTypes.INTEGER,
    Voltage: DataTypes.STRING,
    Current : DataTypes.STRING,
    Temperature:  DataTypes.STRING,
   
  }, {});
  batteryTransactions.associate = function(models) {
    // associations can be defined here
  };
  return batteryTransactions;
};