import axios from "axios"

import { MATCHES_FETCH, MATCHES_FETCH_ERROR, MATCHES_FETCH_SUCCESS } from "../../reducers/Matches/MatchesReducer"


export const matchesFetch = () => async (dispatch) => {
    try {
        dispatch({type: MATCHES_FETCH})
        const responce = await axios.get('http://localhost:8000/matches')
        dispatch({type: MATCHES_FETCH_SUCCESS, payload: responce.data})
    } catch (e) {
        dispatch({type: MATCHES_FETCH_ERROR, payload: e})
    }
}