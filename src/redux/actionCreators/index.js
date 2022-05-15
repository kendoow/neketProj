import * as Games from './Games/GamesActionCreator';
import * as Matches from './Matches/MatchesActionCretor';

const actions = {
    ...Games,
    ...Matches,
}

export default actions;