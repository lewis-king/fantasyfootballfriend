"use strict";
var request = require('request');
var PlayerDataDAO = require('../../dao/PlayerDAO');
var playerDataDAO = new PlayerDataDAO;
var TeamDataDAO = require('../../dao/TeamDAO');
var teamDataDAO = new TeamDataDAO;
var testData = require('./data.json');

function saveAllPlayerAndTeamData() {
    request('https://fantasy.premierleague.com/drf/bootstrap-static', function (error, response, body) {
        let allPlayerData = JSON.parse(body)
        playerDataDAO.saveAllPlayerData(allPlayerData);
        teamDataDAO.saveAllTeamData(allPlayerData);
    });
}

function retrieveAllPlayerData(callback) {
    playerDataDAO.retrieveAllPlayerData(callback);
}

function retrievePlayerByName(name, callback) {
    playerDataDAO.retrievePlayerByName(name, callback);
}

function retrieveAllPlayersNames(callback) {
    playerDataDAO.retrieveAllPlayersNames(callback);
}

module.exports = {
    saveAllPlayerData: saveAllPlayerAndTeamData,
    retrieveAllPlayerData: retrieveAllPlayerData,
    retrievePlayerByName: retrievePlayerByName,
    retrieveAllPlayersNames : retrieveAllPlayersNames
}