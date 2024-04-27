'use strict';
module.exports = (sequelize, DataTypes) => {
  const batteries = sequelize.define('batteries', {
    city:DataTypes.STRING,
    zone: DataTypes.STRING,
    ward: DataTypes.STRING,
    beat: DataTypes.STRING,
    device_number:DataTypes.STRING
  }, {});
  batteries.associate = function(models) {
    // associations can be defined here
  };
  return batteries;
};