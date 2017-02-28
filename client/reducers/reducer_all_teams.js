import { FETCH_TEAMS } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_TEAMS:
            return action.payload.data;
        default:
            return state;
    }
}