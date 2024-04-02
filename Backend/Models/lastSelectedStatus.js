'use strict';
module.exports = (sequelize, DataTypes) => {
  const lastSelectedUid = sequelize.define('lastSelectedUid', {
    lastUid:DataTypes.STRING,
 
  
  }, {
    tableName: 'lastSelectedUid',
    timestamps: true,
  });

  

  return lastSelectedUid
}


