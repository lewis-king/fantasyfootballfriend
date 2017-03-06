"use strict";
var mongoose = require('mongoose');
var connection = require('./dbconnection');
var PlayerDataSchema = require('./playerdata');
const PLAYER_DATA_MODEL = 'PlayerData';

function persistPlayerData(allPlayerData) {
    var PlayerData = mongoose.model(PLAYER_DATA_MODEL, PlayerDataSchema);
    PlayerData.remove({})
    var playerArr = [];
    allPlayerData.elements.forEach(p => {
        var player = new PlayerData({
            firstName: p.first_name
            , lastName: p.second_name
            , fullName: `${p.first_name} ${p.second_name}`
            , photoId      : `https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p${p.photo}.png`.replace('.jpg', '')
            , status      : p.status
            , teamCode      : p.team
            , costNow      : p.now_cost * 100000
            , costChangeStart      : p.cost_change_start * 100000
            , inDreamTeam      : p.in_dreamteam
            , dreamTeamCount      : p.dreamteam_count
            , selectedByPercent      : p.selected_by_percent
            , form      : p.form
            , totalPoints : p.total_points
            , avgPointsPerGame      : p.points_per_game
            , goalsScored      : p.goals_scored
            , assists      : p.assists
            , cleanSheets      : p.clean_sheets
            , saves      : p.saves
            , goalsConceded      : p.goals_conceded
            , yellowCards      : p.yellow_cards
            , redCards      : p.red_cards
            , bps      : p.bps
            , influence      : p.influence
            , creativity      : p.creativity
            , threat      : p.threat
            , ict_index     : p.ict_index
        })
        playerArr.push(player);
    });
    PlayerData.create(playerArr, function(err, results) {
        if (err) return console.error(err);
        console.log(`Players saved to the DB`)
    })
}

module.exports = class PlayerDataDAO {

    saveAllPlayerData(allPlayerData) {
        persistPlayerData(allPlayerData);
    }

    retrieveAllPlayerData(callback) {
        var PlayerData = mongoose.model(PLAYER_DATA_MODEL, PlayerDataSchema);
        PlayerData.find({}, function (err, players) {
            callback(players);
        });
    }

    retrievePlayerByName(name, callback) {
        var PlayerData = mongoose.model(PLAYER_DATA_MODEL, PlayerDataSchema);
        PlayerData.findOne( { 'fullName': name }, function (err, player) {
            callback(player);
        });
    }

    retrievePlayerByCriteria(body, callback) {
        var PlayerData = mongoose.model(PLAYER_DATA_MODEL, PlayerDataSchema);
        PlayerData.findOne({
            position: body.pos,
            costNow: { $lt: body.price},
        }).
        exec(callback);
    }

    retrieveAllPlayersNames(callback) {
        var PlayerData = mongoose.model(PLAYER_DATA_MODEL, PlayerDataSchema);
        PlayerData.find( {}, '-_id fullName', function (err, player) {
            callback(player);
        });
    }
}