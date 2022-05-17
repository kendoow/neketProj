import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useActions } from '../../hooks/UseActions';


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
                
              </>: null}
    </Layout>
  )
}

export default Games;