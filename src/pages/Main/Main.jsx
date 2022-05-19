import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useActions } from "../../hooks/UseActions";
import { useSelector } from "react-redux";

import Layout from "../../pageComponents/Layout/Layout";
import NewsItem from "../../pageComponents/Main/NewsItem/NewsItem";

import styles from "./Main.module.scss";

import icon from "../../assets/logo.svg";

const Main = () => {
  const [search, setSearch] = useState('')
  const { isAuth } = useSelector((state) => state.auth);
  const {mainFetch, mainFilter} = useActions()
  const {news, filterNews} = useSelector(state => state.main)

  useEffect(() => {
    mainFetch()
    window.scrollTo(0, 0)
  }, [])
  
  useEffect(() => {
    mainFilter(news, search)
  }, [search])
  
  return (
    <Layout>
      <div className={styles.Container}>
        <div className={styles.news}>
          <div className={styles.newsHeader}>
            <h3>Поиск новостей:</h3>
            <input 
             type="text" 
             placeholder="Поиск..."
             value={search}
             onChange={(e) => {
               setSearch(e.target.value)
             }} />
          </div>
        </div>
        <div className={styles.newsHeader}>
          <h3>Новости</h3>
          {isAuth ? <Link className={styles.unpublished} to={'/unpulishednews'}>Неопубликованные новости</Link> : <></>}
          </div>
        <div className={styles.NewsItems}>
          {filterNews.length  
              ? filterNews.filter(i => i.type === 'common').map(item => (
                <NewsItem 
                 key={item.id}
                 title={item.title}
                 date={item.date}
                 tags={item.tags}
                 descr={item.description}
                 img={item.img}/>
              ))
              : null}
        </div>
      </div>
    </Layout>
  );
};

export default Main;
