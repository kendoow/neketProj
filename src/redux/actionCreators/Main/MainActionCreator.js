import axios from "axios";

import { MAIN_FETCH, MAIN_FETCH_ERROR, MAIN_FETCH_SUCCESS, MAIN_FILTER } from "../../reducers/Main/MainReducer"

export const mainFetch = () => async (dispatch) => {
    try {
        dispatch({type: MAIN_FETCH})
        const responce = await axios.get('http://localhost:8000/news') 
        dispatch({type: MAIN_FETCH_SUCCESS, payload: responce.data})
        dispatch({type: MAIN_FILTER, payload: responce.data})
    } catch (e) {
        dispatch({type: MAIN_FETCH_ERROR, payload: e})
    }
}

export const mainFilter = (news, search) => (dispatch) => {
    if (search === '') {
        dispatch({type: MAIN_FILTER, payload: news})
    } else {
        const filterNews = {
            common: news.common.filter(item => item.tags.toLowerCase().includes(search.toLowerCase())),
            recommended: news.recommended.filter(item => item.tags.toLowerCase().includes(search.toLowerCase()))
            }
        dispatch({type: MAIN_FILTER, payload: filterNews})
    }
}