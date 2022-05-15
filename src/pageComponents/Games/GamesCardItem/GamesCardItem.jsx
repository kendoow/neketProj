import { useActions } from '../../../hooks/UseActions';
import styles from './GamesCardItem.module.scss';

const GamesCardItem = ({id, img, game}) => {
  const {gamesSelected} = useActions()
  return (
    <button 
     className={styles.Container}
     onClick={() => {
      gamesSelected(id)
     }}>
        <img src={img} alt=''/>
        <div className={styles.Title}>{game}</div>
    </button>
  )
}

export default GamesCardItem;