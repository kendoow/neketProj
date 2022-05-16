const initialState = {
    isAuth: false,
    error: "",
    isLoading: false,
    type: undefined,
    user: {}
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case "SET_AUTH":
        return {
          ...state,
          isAuth: action.payload,
          isLoading: false,
        };
      case "SET_ERROR":
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      case "SET_IS_LOADING":
        return {
          ...state,
          isLoading: action.payload,
          type: undefined,
        };
      case "SET_USER":
        return { ...state, user: action.payload };
      case "SET_USER_TYPE":
        return {...state, type: action.payload};
      default:
        return state;
    }
  }