'use strict';
module.exports = (sequelize, DataTypes) => {
  const Master = sequelize.define('Master', {
    UID:DataTypes.STRING,
    Location:DataTypes.STRING,
    City:DataTypes.STRING,
    State:DataTypes.STRING,
    Lat:DataTypes.STRING,
    Long:DataTypes.STRING,
    Roads:DataTypes.INTEGER,
    Address:DataTypes.STRING
  
  }, {
    tableName: 'Master',
    timestamps: true,
  });

 

  return Master;
};