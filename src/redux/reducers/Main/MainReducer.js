const initialState = {
    loading: false,
    error: null,
    news: {},
    filterNews: {},
}

export const MAIN_FETCH = 'MAIN_FETCH'; 
export const MAIN_FETCH_SUCCESS = 'MAIN_FETCH_SUCCESS'; 
export const MAIN_FETCH_ERROR = 'MAIN_FETCH_ERROR';
export const MAIN_FILTER = 'MAIN_FILTER';

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case MAIN_FETCH:
            return {...state, loading: true}
        case MAIN_FETCH_SUCCESS:
            return {...state, loading: false, error: null, news: action.payload}
        case MAIN_FETCH_ERROR:
            return {...state, loading: false, error: action.payload}
        case MAIN_FILTER:
            return {...state, filterNews: action.payload}
        default:
            return state;
    }
} 

export default mainReducer;