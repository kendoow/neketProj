import { combineReducers } from "redux";

import gamesReducer from './Games/GamesReducer';
import matchesReducer from "./Matches/MatchesReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    matches: matchesReducer,
    // auth:

})

export default rootReducer;