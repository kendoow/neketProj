import * as Games from './Games/GamesActionCreator';
import * as Matches from './Matches/MatchesActionCretor';
import * as Main from './Main/MainActionCreator';


const actions = {
    ...Games,
    ...Matches,
    ...Main,
}

export default actions;