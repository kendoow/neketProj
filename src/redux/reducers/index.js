import { combineReducers } from "redux";

import gamesReducer from './Games/GamesReducer';
import mainReducer from "./Main/MainReducer";
import matchesReducer from "./Matches/MatchesReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    matches: matchesReducer,
    main: mainReducer,
    // auth:

})

export default rootReducer;