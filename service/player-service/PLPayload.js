var http = require('http');
var testData = require('./data.json');

/*function getPLPayload(callback) {*/
function getPLPayload() {
    var options = {
        host: 'fantasy.premierleague.com',
        port: 443,
        path: '/drf/bootstrap-static',
        method: 'GET'
    };

    http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    }).end();
    return testData;
}

module.exports = getPLPayload;