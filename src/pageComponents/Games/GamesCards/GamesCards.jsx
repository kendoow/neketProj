import GamesCardItem from '../GamesCardItem/GamesCardItem';

import styles from './GamesCards.module.scss';

import csgo from '../../../assets/Games/csgo.svg';
import { useSelector } from 'react-redux';
const GamesCards = () => {
  const {games} = useSelector(state => state.games)
  return (
    <div className={styles.Container}>
        {
          games.map(item => (
            <GamesCardItem 
             img={csgo} 
             game={item.name}
             id={item.id}
             key={item.id}/>
          ))
        }
    </div>
  )
}

export default GamesCards;