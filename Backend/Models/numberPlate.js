'use strict';
module.exports = (sequelize, DataTypes) => {
  const NumberPlate = sequelize.define('NumberPlate', {
    number : DataTypes.INTEGER,
    isOnline: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

  
  }, {});
  NumberPlate.associate = function(models) {
    // associations can be defined here
  };
  return NumberPlate;
};