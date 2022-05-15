import { Link } from "react-router-dom";
import styles from "./Layout.module.scss";
import logo from "../../assets/logo.svg";
const Layout = ({ children }) => {
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
         

          <Link to="/singin" className={styles.Login}>
            Войти
          </Link>
        </div>
      </div>
      <div className={styles.Body}>{children}</div>
      <div className={styles.Footer}>Сделано Абобусом Абобовичем</div>
    </div>
  );
};

export default Layout;
