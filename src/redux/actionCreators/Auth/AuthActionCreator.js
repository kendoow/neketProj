import axios from "axios";

export const AuthActionCreators = {
  setUser: (user) => ({
    type: "SET_USER",
    payload: user,
  }),
  setIsAuth: (auth) => ({
    type: "SET_AUTH",
    payload: auth,
  }),
  setIsLoading: (payload) => ({
    type: "SET_IS_LOADING",
    payload,
  }),
  setError: (payload) => ({
    type: "SET_ERROR",
    payload,
  }),
  setUserType: (payload) => ({
    type: "SET_USER_TYPE",
    payload,
  }),
  signin: (login, password) => async (dispatch) => {
    try {
      let item = {login, password}
      const newUser = await axios.post(
        "http://localhost:8000/users",
        item
      );
      
      localStorage.setItem("auth", "true");
      localStorage.setItem("username", login);
      dispatch(AuthActionCreators.setUser(newUser)); // передаю пользователя в стейт
      dispatch(AuthActionCreators.setIsLoading(false));

      dispatch(AuthActionCreators.setIsAuth(true)); // регистрация пройдена
    } catch (error) {
      dispatch(AuthActionCreators.setError("ошибка при регистрации"));
    }
  },
  login: (login, password) => async (dispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const response = await axios.get("http://localhost:8000/users");
      
      const LoggedUsers = response.data.find(
        (user) => user.login === login && user.password === password
      );
      const userType = response.data.filter(i => i.password === password && i.login === login)[0].type
      
      if (LoggedUsers) {
        dispatch(AuthActionCreators.setError(""));

        localStorage.setItem("auth", "true");
        localStorage.setItem('userType', userType)
        dispatch(AuthActionCreators.setUser(LoggedUsers)); // передаю пользователя в стейт
        dispatch(AuthActionCreators.setIsLoading(false));
        dispatch(AuthActionCreators.setUserType(userType))
        dispatch(AuthActionCreators.setIsAuth(true)); // лоинг пройден 
      } else {
        dispatch(AuthActionCreators.setError("Некорректный логин или пароль"));
      }
    } catch (e) {
      dispatch(AuthActionCreators.setError("Произошла ошибка при логине"));
    }
  },
  logout: () => async (dispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(AuthActionCreators.setIsAuth(false));
    dispatch(AuthActionCreators.setUser({}));
  },
};
