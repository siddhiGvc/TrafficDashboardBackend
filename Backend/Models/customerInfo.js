'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrafficCustomerInfo = sequelize.define('TrafficCustomerInfo', {
    CustomerName:DataTypes.STRING,
    City:DataTypes.STRING,
    
   
  }, {
    tableName: 'TrafficCustomerInfo'
  });
  TrafficCustomerInfo.associate = function(models) {
    // associations can be defined here
  };
  return TrafficCustomerInfo;
};