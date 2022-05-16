import UnPunlishedNewsItem from '../../pageComponents/UnPunlishedNewsItem/UnPunlishedNewsItem'
import styles from './UnbublishedNews.module.scss'

const UnbublishedNews = () => {
  return (
    <>
        <div className={styles.container}>
            <UnPunlishedNewsItem/>
        </div>
    </>
  )
}

export default UnbublishedNews