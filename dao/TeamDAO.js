"use strict";
var mongoose = require('mongoose');
var connection = require('./dbconnection');
var TeamDataSchema = require('./teamdata');
const TEAM_DATA_MODEL = 'TeamData';

function persistTeamData(allPlayerData) {
    var TeamData = mongoose.model(TEAM_DATA_MODEL, TeamDataSchema);
    var teamArr = [];
    allPlayerData.teams.forEach(t => {
        var team = new TeamData({
            name: t.name
            , shortName: t.short_name
            , code: t.code
            , id: t.id
            , position      : t.position
            , strength      : t.strength
            , strengthOverallHome      : t.strength_overall_home
            , strengthOverallAway      : t.strength_overall_away
            , strengthAttackHome      : t.strength_attack_home
            , strengthAttackAway      : t.strength_attack_away
            , strengthDefenceHome      : t.strength_defence_home
            , strengthDefenceAway      : t.strength_defence_away
            , lastOpponentId      : t.current_event_fixture.length > 0 ? t.current_event_fixture[0].opponent : null
            , homeToLastOpponent      : t.current_event_fixture.length > 0 ? t.current_event_fixture[0].is_home : null
            , nextOpponentId      : t.next_event_fixture.length > 0 ? t.next_event_fixture[0].opponent : null
            , homeToNextOpponent      : t.next_event_fixture.length > 0 ? t.next_event_fixture[0].is_home : null
        })
        teamArr.push(team);
    });
    TeamData.remove({})
    TeamData.create(teamArr, function(err, results) {
        if (err) return console.error(err);
        console.log(`Teams saved to the DB`)
    })
}

module.exports = class TeamDataDAO {

    saveAllTeamData(allPlayerData) {
        persistTeamData(allPlayerData);
    }

    retrieveAllTeamData(callback) {
        var TeamData = mongoose.model(TEAM_DATA_MODEL, TeamDataSchema);
        TeamData.find({}, function (err, teams) {
            console.log(teams);
            callback(teams);
        });
    }

}