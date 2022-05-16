import axios from "axios"

import { MATCHES_FETCH, MATCHES_FETCH_ERROR, MATCHES_FETCH_SUCCESS, MATCHES_UNPUBLISHED_SELECTED } from "../../reducers/Matches/MatchesReducer"


export const matchesFetch = () => async (dispatch) => { // загрузка матчей
    try {
        dispatch({type: MATCHES_FETCH})
        const responce = await axios.get('http://localhost:8000/matches')
        dispatch({type: MATCHES_FETCH_SUCCESS, payload: responce.data})
    } catch (e) {
        dispatch({type: MATCHES_FETCH_ERROR, payload: e})
    }
}

export const matchesDelete = (id) => async (dispatch) => { // удаление матча
    try {
        await axios.delete(`http://localhost:8000/matches/${id}`)  
        dispatch(matchesFetch())   
    } catch (e) {
        dispatch({type: MATCHES_FETCH_ERROR, payload: e})
    } 
}  

export const matchesType = (matches, id, type) => async (dispatch) => { // изменение типа матча
    try {
        const Matches = matches.filter(i => i.id === id)[0]
        await axios.put(`http://localhost:8000/matches/${id}`, {...Matches, type: type})
    } catch (e) {
        dispatch({type: MATCHES_FETCH_ERROR, payload: e})
    }
}

export const matchesAdd = (match) => async (dispatch) => { // добавление матчей
    try {
      await axios.post("http://localhost:8000/matches", match).then(({ match }) => {
        dispatch({ type: MATCHES_FETCH_SUCCESS, payload: match });
      });
    } catch (e) {
      dispatch({ type: MATCHES_FETCH_ERROR, payload: e });
    }
};

export const matchesEdit = (updatedPost) => async (dispatch) => { // редактирвание матчей 
    try {
      await axios
        .put(`http://localhost:8000/matches/${updatedPost.id}`, updatedPost)
        .then(({ post }) => {
          dispatch({ type: MATCHES_FETCH_SUCCESS, payload: post });;
        });
    } catch (e) {
      dispatch({ type: MATCHES_FETCH_ERROR, payload: e });
    }
};

export const matchesSelected = (item) => (dispatch) => { // выбранный для редактирования матч
    dispatch({type: MATCHES_UNPUBLISHED_SELECTED, payload: item})
}