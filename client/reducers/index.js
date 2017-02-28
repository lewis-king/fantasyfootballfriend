import { combineReducers } from 'redux';
import PlayersNamesReducer from './reducer_players_names';
import PlayerDetailReducer from './reducer_player_detail';
import AllTeamsReducer from './reducer_all_teams';

const rootReducer = combineReducers({
    playersNames: PlayersNamesReducer,
    playerDetail: PlayerDetailReducer,
    teams: AllTeamsReducer
});

export default rootReducer;