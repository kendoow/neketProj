import axios from "axios";

import {
  MAIN_FETCH,
  MAIN_FETCH_ERROR,
  MAIN_FETCH_SUCCESS,
  MAIN_FILTER,
  MAIN_UNPUBLISHED_SELECTED
} from "../../reducers/Main/MainReducer";

export const mainFetch = () => async (dispatch) => {
  try {
    dispatch({ type: MAIN_FETCH });
    const responce = await axios.get("http://localhost:8000/news");
    dispatch({ type: MAIN_FETCH_SUCCESS, payload: responce.data });
    dispatch({ type: MAIN_FILTER, payload: responce.data });
  } catch (e) {
    dispatch({ type: MAIN_FETCH_ERROR, payload: e });
  }
};

export const mainFilter = (news, search) => (dispatch) => {
  if (search === "") {
    dispatch({ type: MAIN_FILTER, payload: news });
  } else {
    const filterNews = news.filter((item) =>
      item.tags.toLowerCase().includes(search.toLowerCase())
    );
    dispatch({ type: MAIN_FILTER, payload: filterNews });
  }
};



export const mainDelete = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8000/news/${id}`);
    dispatch(mainFetch());
  } catch (e) {
    dispatch({ type: MAIN_FETCH_ERROR, payload: e });
  }
};

export const mainType = (news, id, type) => async (dispatch) => {
  try {
    const News = news.filter((i) => i.id === id)[0];
    await axios.put(`http://localhost:8000/news/${id}`, {
      ...News,
      type: type,
    });
  } catch (e) {
    dispatch({ type: MAIN_FETCH_ERROR, payload: e });
  }
};

export const mainAdd = (post) => async (dispatch) => { // добавление постов
  try {
    await axios.post("http://localhost:8000/news", post).then(({ post }) => {
      dispatch({ type: MAIN_FETCH_SUCCESS, payload: post });
    });
  } catch (e) {
    dispatch({ type: MAIN_FETCH_ERROR, payload: e });
  }
};



export const mainEdit = (updatedPost) => async (dispatch) => {
  try {
    await axios
      .put(`http://localhost:8000/news/${updatedPost.id}`, updatedPost)
      .then(({ post }) => {
        dispatch({ type: MAIN_FETCH_SUCCESS, payload: post });;
      });
  } catch (e) {
    dispatch({ type: MAIN_FETCH_ERROR, payload: e });
  }
};

export const mainSelected = (item) => (dispatch) => {
  dispatch({type: MAIN_UNPUBLISHED_SELECTED, payload: item})
}