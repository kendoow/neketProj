import { useSelector } from 'react-redux';

import GamesCardItem from '../GamesCardItem/GamesCardItem';

import styles from './GamesCards.module.scss';

import csgo from '../../../assets/Games/csgo.svg';

const GamesCards = () => {
  const {games, selectedGame} = useSelector(state => state.games)
  return (
    <div className={selectedGame.id
                    ? styles.Container + ' ' + styles.SelectedGame 
                    : styles.Container}>
        {
          games.map(item => (
            <GamesCardItem 
             img={item.img} 
             game={item.name}
             id={item.id}
             key={item.id}/>
          ))
        }
    </div>
  )
}

export default GamesCards;