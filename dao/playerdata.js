var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PlayerDataSchema = new Schema({
      firstName     : String
    , lastName: String
    , fullName : String
    , photoId      : String
    , status      : String
    , teamCode      : Number
    , costNow      : Number
    , costChangeStart      : Number
    , inDreamTeam      : Boolean
    , dreamTeamCount      : Number
    , selectedByPercent      : Number
    , form      : Number
    , totalPoints : Number
    , avgPointsPerGame      : Number
    , goalsScored      : Number
    , assists      : Number
    , cleanSheets      : Number
    , saves      : Number
    , goalsConceded      : Number
    , yellowCards      : Number
    , redCards      : Number
    , bps      : Number
    , influence      : Number
    , creativity      : Number
    , threat      : Number
    , ict_index     : Number
});

module.exports = PlayerDataSchema;