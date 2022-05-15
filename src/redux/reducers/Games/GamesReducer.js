const initialState = {
    loading: false,
    error: null,
    selectedGame: [],
    games: [],
}

export const GAMES_FETCH = 'GAMES_FETCH';
export const GAMES_FETCH_SUCCESS = 'GAMES_FETCH_SUCCESS';
export const GAMES_FETCH_ERROR = 'GAMES_FETCH_ERROR';
export const GAMES_SELECTED = 'GAMES_SELECTED';


const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAMES_FETCH:
            return {...state, loading: true}
        case GAMES_FETCH_SUCCESS:
            return {...state, loading: false, error: null, games: action.payload}
        case GAMES_FETCH_ERROR:
            return {...state, loading: false, error: action.payload}
        case GAMES_SELECTED:
            return {...state, selectedGame: action.payload}
        default:
            return state;
    }
}

export default gamesReducer;