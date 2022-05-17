import { Link } from "react-router-dom";
import styles from "./Layout.module.scss";
import logo from "../../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { AuthActionCreators } from "../../redux/actionCreators/Auth/AuthActionCreator";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(AuthActionCreators.logout());
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.Logo} />
        </Link>
        <div className={styles.BlockBtn}>
          <Link to="/" className={styles.Btn}>
            Новости
          </Link>
          <Link to="/games" className={styles.Btn}>
            Игры
          </Link>
          <Link to="/matches" className={styles.Btn}>
            Матчи
          </Link>
        </div>
        <div className={styles.BlockLogin}>
          {isAuth ? (
            <button onClick={logout} className={styles.Login}>
              Выйти
            </button>
          ) : (
            <Link to="/singin" className={styles.Login}>
              Войти
            </Link>
          )}
        </div>
      </div>
      <div className={styles.Body}>{children}</div>
      <div className={styles.Footer}>Copyrighted Cyber</div>
    </div>
  );
};

export default Layout;
