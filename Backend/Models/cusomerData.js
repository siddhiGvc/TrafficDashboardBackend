'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrafficCustomerData = sequelize.define('TrafficCustomerData', {
    CustomerName:DataTypes.STRING,
    CInfo1:DataTypes.STRING,
    CInfo2:DataTypes.STRING,
    CInfo3:DataTypes.STRING,
    CInfo4:DataTypes.STRING,
    MachineType:DataTypes.STRING,

   
  }, {
    tableName: 'TrafficCustomerData'
  });
  TrafficCustomerData.associate = function(models) {
    // associations can be defined here
  };
  return TrafficCustomerData;
};