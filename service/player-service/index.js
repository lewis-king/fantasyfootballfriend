"use strict";
var plPayload = require('./PLPayload');
var PlayerDataDAO = require('../../dao/PlayerDAO');
var playerDataDAO = new PlayerDataDAO;
var TeamDataDAO = require('../../dao/TeamDAO');
var teamDataDAO = new TeamDataDAO;

function saveAllPlayerAndTeamData() {
    var allPlayerData = plPayload();
    console.log(playerDataDAO);
    playerDataDAO.saveAllPlayerData(allPlayerData);
    teamDataDAO.saveAllTeamData(allPlayerData);
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