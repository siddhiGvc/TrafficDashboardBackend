const schedule = require('node-schedule');
const {sequelize}=require('./Models')

const setup = async function () {
    const jobHourlyReport = schedule.scheduleJob('*/1 * * * * ',async function() {
        console.log("Starting 1 minute function");
        const [numOfUpdatedRows, updatedRows] = await sequelize.query(
            `UPDATE CurrentStatus
             SET isOnline = 0`,
            {
                type: sequelize.QueryTypes.UPDATE,
            }
        );

        console.log(`Number of updated rows: ${numOfUpdatedRows}`);
        console.log("Updated rows:", updatedRows);
        
    });
}

module.exports=setup;

