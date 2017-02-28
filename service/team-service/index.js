"use strict";
var TeamDataDAO = require('../../dao/TeamDAO');
var teamDataDAO = new TeamDataDAO;

function retrieveAllTeamData(callback) {
    teamDataDAO.retrieveAllTeamData(callback);
}

module.exports = {
    retrieveAllTeamData: retrieveAllTeamData,
}