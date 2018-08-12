"use strict";
var request = require('request');
var PlayerDataDAO = require('../../dao/PlayerDAO');
var playerDataDAO = new PlayerDataDAO;
var TeamDataDAO = require('../../dao/TeamDAO');
var teamDataDAO = new TeamDataDAO;

function saveAllPlayerAndTeamData() {
    request('https://fantasy.premierleague.com/drf/bootstrap-static', function (error, response, body) {
        let allPlayerData = JSON.parse(body);
        playerDataDAO.saveAllPlayerData(allPlayerData);
        teamDataDAO.saveAllTeamData(allPlayerData);
    });
}

function retrieveAllPlayerData(callback, sortCriteria) {
    playerDataDAO.retrieveAllPlayerData(callback, sortCriteria);
}

function retrieveAllHistoricPlayerData(callback) {
    playerDataDAO.retrieveAllHistoricPlayerData(callback);
}

function retrievePlayerByName(name, callback) {
    playerDataDAO.retrievePlayerByName(name, callback);
}

function retrievePlayersByCriteria(criteria, callback) {
    playerDataDAO.retrievePlayersByCriteria(criteria, callback);
}

function retrieveAllPlayersNames(callback) {
    playerDataDAO.retrieveAllPlayersNames(callback);
}

module.exports = {
    saveAllPlayerData: saveAllPlayerAndTeamData,
    retrieveAllPlayerData: retrieveAllPlayerData,
    retrieveAllHistoricPlayerData: retrieveAllHistoricPlayerData,
    retrievePlayerByName: retrievePlayerByName,
    retrievePlayersByCriteria: retrievePlayersByCriteria,
    retrieveAllPlayersNames : retrieveAllPlayersNames
}