var express = require('express');
var router = express.Router();
var playerService = require('../service/player-service');
var teamService = require('../service/team-service');

import React from 'react'

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile('index.html', {});
});

router.get('/PLData', function (req, res, next) {
    var payload = playerService.saveAllPlayerData();
    res.send('Request Sent');

});

router.get('/allPlayers', function (req, res, next) {
    playerService.retrieveAllPlayerData(function (payload) {
        res.setHeader('Content-Type', 'application/json');
        res.json(payload);
    });
});

router.get('/players/:name', function (req, res, next) {
    playerService.retrievePlayerByName(req.params['name'], function (payload) {
        res.setHeader('Content-Type', 'application/json');
        res.json(payload);
    });
});

router.get('/playersNames', function (req, res, next) {
    playerService.retrieveAllPlayersNames(function (payload) {
        res.setHeader('Content-Type', 'application/json');
        res.json(payload);
    });
});

router.get('/player/:playerId', function (req, res, next) {
    var payload = playerService.retrieveAllPlayerData();
});

router.post('/players', function (req, res, next) {
    let criteria = req.body;

    playerService.retrievePlayersByCriteria(criteria, function (payload) {
        res.setHeader('Content-Type', 'application/json');
        res.json(payload);
    });
});


router.get('/allTeams', function (req, res, next) {
    teamService.retrieveAllTeamData(function (payload) {
        res.setHeader('Content-Type', 'application/json');
        res.json(payload);
    });
});

module.exports = router;
