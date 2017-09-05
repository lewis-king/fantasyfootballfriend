//For specific times, use a chron job
var updateData = function() {
    console.log("Scheduled update data job running...");
    var axios = require('axios')
    axios.get("/PLData");
}
var CronJob = require('cron').CronJob;
new CronJob({
    cronTime: "00 9,21 * * * *",//12 hours
    onTick: updateData,
    start: true,
    timeZone: "Europe/London"
});