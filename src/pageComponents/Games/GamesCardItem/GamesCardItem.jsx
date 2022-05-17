import { useSelector } from 'react-redux';
import useImage from '../../../hooks/useImage';
import { useActions } from '../../../hooks/UseActions';

import styles from './GamesCardItem.module.scss';


const GamesCardItem = ({id, img, game}) => {  
  const {gamesSelected} = useActions()
  const {selectedGame} = useSelector(state => state.games)

  const {image} = useImage(img)
  return (
    <button 
     className={selectedGame.id === id 
                ? styles.Container + ' ' + styles.Active 
                : styles.Container}
     onClick={() => {
      gamesSelected(id)
     }}>
        <img 
         src={image} 
         alt=''
         className={styles.Image}/> 
        <div className={styles.Title}>{game}</div>
    </button>
  )
}

export default GamesCardItem;