import { combineReducers } from "redux";
import authReducer from "./Auth/AuthReducer";

import gamesReducer from './Games/GamesReducer';
import mainReducer from "./Main/MainReducer";
import matchesReducer from "./Matches/MatchesReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    matches: matchesReducer,
    main: mainReducer,
    auth: authReducer

})

export default rootReducer;