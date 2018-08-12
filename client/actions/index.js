import axios from 'axios';

export const FETCH_PLAYERS_NAMES = 'FETCH_PLAYERS_NAMES';
export const FETCH_TEAMS = 'FETCH_TEAMS';
export const FETCH_PLAYER_DATA = 'FETCH_PLAYER_DATA';
export const FETCH_HISTORIC_PLAYER_DATA = 'FETCH_HISTORIC_PLAYER_DATA';
export const FETCH_ALL_PLAYER_DATA = "FETCH_ALL_PLAYER_DATA";

const FETCH_PLAYERS_NAMES_URL = '/playersNames';
const FETCH_TEAMS_URL = '/allTeams';

function returnObj(actionName, request) {
    return {
        type: actionName,
        payload: request
    };
}

export function fetchPlayersNames() {
    const request = axios.get(FETCH_PLAYERS_NAMES_URL);

    return {
        type: FETCH_PLAYERS_NAMES,
        payload: request
    };
}

export function fetchPlayerData(name) {
    const request = axios.get(`/players/${name}`);

    return {
        type: FETCH_PLAYER_DATA,
        payload: request
    };
}

export function fetchAllHistoricPlayerData() {
    const request = axios.get('/allPlayersHistory');
    return returnObj(FETCH_PLAYER_DATA, request);
}

export function fetchAllPlayerData(sortCriteria) {
  const request = axios.get(`/allPlayers?sort=${sortCriteria}`);
  return returnObj(FETCH_ALL_PLAYER_DATA, request);
}

export function fetchAllPlayerDataSorted(sortCriteria) {
  const request = axios.get(`/allPlayers?sort=${sortCriteria}`);
  return returnObj(FETCH_ALL_PLAYER_DATA, request);
}

export function fetchPlayerDataByCriteria(criteria) {
    let {posId, budget} = criteria;
    const request = axios.post('/players', {
            posId,
            budget
    });
    return {
        type: FETCH_PLAYER_DATA,
        payload: request
    }
}

export function fetchTeams() {
    const request = axios.get(FETCH_TEAMS_URL);

    return {
        type: FETCH_TEAMS,
        payload: request
    };
}