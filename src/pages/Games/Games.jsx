import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useActions } from '../../hooks/UseActions';

import SimpleSlider from '../../components/Slider/Slider';
import GamesCards from '../../pageComponents/Games/GamesCards/GamesCards';
import GamesInfo from '../../pageComponents/Games/GamesInfo/GamesInfo';

import Layout from '../../pageComponents/Layout/Layout';

import styles from './Games.module.scss';


const Games = () => {
  const {gamesFetch} = useActions()
  const {id} = useSelector(state => state.games.selectedGame)
  useEffect(() => {
    gamesFetch()
  }, [])
  
  return (
    <Layout>
        <GamesCards />
        {id ? <>
                <GamesInfo />
                <div className={styles.Slider}>
                    <SimpleSlider/>
                </div>
              </>: null}
    </Layout>
  )
}

export default Games;