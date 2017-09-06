module.exports = function() {
    console.log("Scheduled update data job running...");
    var axios = require('axios')
    axios.get("/PLData");
}