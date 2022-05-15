import { combineReducers } from "redux";

import gamesReducer from './Games/GamesReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
    // auth:

})

export default rootReducer;