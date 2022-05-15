const initialState = {
    loading: false,
    error: null,
    matches: {}
}


export const MATCHES_FETCH = 'MATCHES_FETCH';
export const MATCHES_FETCH_SUCCESS = 'MATCHES_FETCH_SUCCESS';
export const MATCHES_FETCH_ERROR = 'MATCHES_FETCH_ERROR';

const matchesReducer = (state = initialState, action) => {
    switch(action.type) {
        case MATCHES_FETCH:
            return {...state, loading: true}
        case MATCHES_FETCH_SUCCESS:
            return {...state, loading: false, error: null, matches: action.payload}
        case MATCHES_FETCH_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export default matchesReducer;