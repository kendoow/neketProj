import { useSelector } from 'react-redux';

import { useActions } from '../../../hooks/UseActions';

import styles from './GamesCardItem.module.scss';

const GamesCardItem = ({id, img, game}) => {
  const {gamesSelected} = useActions()
  const {selectedGame} = useSelector(state => state.games)
  return (
    <button 
     className={selectedGame.id === id 
                ? styles.Container + ' ' + styles.Active 
                : styles.Container}
     onClick={() => {
      gamesSelected(id)
     }}>
        <img src={img} alt=''/>
        <div className={styles.Title}>{game}</div>
    </button>
  )
}

export default GamesCardItem;