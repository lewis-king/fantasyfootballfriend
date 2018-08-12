import { FETCH_PLAYER_DATA, FETCH_ALL_PLAYER_DATA } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_PLAYER_DATA:
            return action.payload.data;
        case FETCH_ALL_PLAYER_DATA:
            return action.payload.data;
        default:
            return state;
    }
}
