import Layout from "../../pageComponents/Layout/Layout";
import styles from "./Main.module.scss";
import NewsItem from "../../pageComponents/NewsItem/NewsItem";
import icon from "../../assets/logo.svg";
const Main = () => {
  return (
    <>
      <Layout>
        <div className={styles.news}>
          <div className={styles.newsHeader}>
            <h3>Рекомендованные новости</h3>
            <input type="text" placeholder="Поиск..." />
          </div>
          <div className={styles.NewsItems}>
            <NewsItem title="заголовок" img={icon} date="дата" tags="теги" />
          </div>
        </div>
        <div className={styles.newsHeader}>
            <h3>Новости</h3>
          </div>
          <div className={styles.NewsItems}>
            <NewsItem title="заголовок" img={icon} date="дата" tags="теги" />
          </div>
      </Layout>
    </>
  );
};

export default Main;
