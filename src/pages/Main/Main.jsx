import { useEffect, useState } from "react";
import { useActions } from "../../hooks/UseActions";
import { useSelector } from "react-redux";

import Layout from "../../pageComponents/Layout/Layout";
import NewsItem from "../../pageComponents/NewsItem/NewsItem";

import styles from "./Main.module.scss";

import icon from "../../assets/logo.svg";

const Main = () => {
  const [search, setSearch] = useState('')

  const {mainFetch, mainFilter} = useActions()
  const {news, filterNews} = useSelector(state => state.main)

  useEffect(() => {
    mainFetch()
  }, [])
  
  useEffect(() => {
    mainFilter(news, search)
  }, [search])

  return (
    <Layout>
      <div className={styles.Container}>
        <div className={styles.news}>
          <div className={styles.newsHeader}>
            <h3>Рекомендованные новости</h3>
            <input 
             type="text" 
             placeholder="Поиск..."
             value={search}
             onChange={(e) => {
               setSearch(e.target.value)
             }} />
          </div>
          <div className={styles.NewsItems}>
            {filterNews.recommended 
                  ? filterNews.recommended.map(item => (
                    <NewsItem 
                     key={item.id}
                     title={item.title}
                     date={item.date}
                     tags={item.tags}
                     img={icon}/>
                  ))
                  : null}
          </div>
        </div>
        <div className={styles.newsHeader}><h3>Новости</h3></div>
        <div className={styles.NewsItems}>
          {filterNews.common 
              ? filterNews.common.map(item => (
                <NewsItem 
                 key={item.id}
                 title={item.title}
                 date={item.date}
                 tags={item.tags}
                 img={icon}/>
              ))
              : null}
        </div>
      </div>
    </Layout>
  );
};

export default Main;
