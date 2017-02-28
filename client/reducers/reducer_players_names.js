import { FETCH_PLAYERS_NAMES } from '../actions/index';

const INITIAL_STATE = {playersNames: []};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_PLAYERS_NAMES:
            return action.payload.data;
        default:
            return state;
    }
}