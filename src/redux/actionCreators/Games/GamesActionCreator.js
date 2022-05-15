import axios from 'axios';

import { GAMES_FETCH, GAMES_FETCH_SUCCESS, GAMES_FETCH_ERROR, GAMES_SELECTED } from '../../reducers/Games/GamesReducer';


export const gamesFetch = () => async (dispatch) => {
    try {
        dispatch({type: GAMES_FETCH})
        const responce = await axios.get('http://localhost:8000/games')
        dispatch({type: GAMES_FETCH_SUCCESS, payload: responce.data})
    } catch (e) {
        dispatch({type: GAMES_FETCH_ERROR, payload: e})
    }
}

export const gamesSelected = (id) => async (dispatch) => {
    try {
        const responce = await axios.get(`http://localhost:8000/games/${id}`) 
        dispatch({type: GAMES_SELECTED, payload: responce.data}) 
    } catch (e) {
        console.log(e)
    }
}
