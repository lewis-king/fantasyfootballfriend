var updateData = require('./update-data-worker.js');
var CronJob = require('cron').CronJob;

new CronJob({
    cronTime: "00 9,21 * * * *",//12 hours
    onTick: updateData(),
    start: true,
    timeZone: "Europe/London"
});