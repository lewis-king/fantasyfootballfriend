var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TeamDataSchema = new Schema({
    name     : String
    , shortName : String
    , code : Number
    , id: Number
    , position : Number
    , strength      : Number
    , strengthOverallHome : Number
    , strengthOverallAway : Number
    , strengthAttackHome : Number
    , strengthAttackAway : Number
    , strengthDefenceHome : Number
    , strengthDefenceAway : Number
    , lastOpponentId : Number
    , homeToLastOpponent : Boolean
    , nextOpponentId : Number
    , homeToNextOpponent : Boolean
});

module.exports = TeamDataSchema;