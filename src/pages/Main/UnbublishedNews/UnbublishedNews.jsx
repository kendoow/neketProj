import { useSelector } from 'react-redux'
import NewsItemAdmin from '../../../pageComponents/Main/NewsItemAdmin/NewsItemAdmin'
import logo from '../../../assets/logo.svg'
import styles from './UnbublishedNews.module.scss'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useActions } from '../../../hooks/UseActions'

const UnbublishedNews = () => {
  const {news} = useSelector(state => state.main)
  const {mainFetch} = useActions()
  useEffect(() => {
    mainFetch()
  }, [])
  return (
    <div className={styles.container}>
      <Link to ='/createPost' className={styles.Btn}>Добавить новость</Link>
        {
          news.map(i => (
            <NewsItemAdmin
             key={i.id}
             id={i.id}
             title={i.title}
             date={i.date}
             tags={i.tags}
             img={logo}
             type={i.type}
             description={i.description}/>
          ))
        }
    </div>
  )
}

export default UnbublishedNews;