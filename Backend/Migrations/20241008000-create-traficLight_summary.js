const view_name = 'TrafficLight_summary';
const query_str = `
SELECT 
  d.*, 
  COALESCE(
    CASE 
      WHEN TIME_TO_SEC(TIMEDIFF(UTC_TIMESTAMP(), lc.lastHeartBeatTime)) / 60 < 1 THEN 'Online' 
      ELSE 'Offline' 
    END, 'Unknown') AS light_status,
  COALESCE(
    CASE 
      WHEN TIME_TO_SEC(TIMEDIFF(UTC_TIMESTAMP(), i.lastHeartBeatTime)) / 60 < 1 THEN 'Online' 
      ELSE 'Offline' 
    END, 'Unknown') AS inverter_status
FROM TrafficLightDevices d
LEFT JOIN TrafficLightColors lc ON d.Junction = lc.Junction
LEFT JOIN InverterStaus i ON d.Junction = i.Junction
`;

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.sequelize.query(`CREATE VIEW ${view_name} AS ${query_str}`),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.sequelize.query(`DROP VIEW ${view_name}`),
  ]),
};

