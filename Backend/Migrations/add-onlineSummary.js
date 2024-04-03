const view_name = 'tf_summary';
const query_str = `
select a.*, 
  CASE WHEN TIME_TO_SEC(TIMEDIFF(UTC_TIMESTAMP(), a.lastHeartbeatTime)) / 60 < 5 THEN 'Online' ELSE 'Offline' END 'machine_status'
from CurrentStatus a
  join Master b on a.UID = b.UID

`

 module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.sequelize.query(`CREATE VIEW ${view_name} AS ${query_str}`),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.sequelize.query(`DROP VIEW ${view_name}`),
  ]),
};