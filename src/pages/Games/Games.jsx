import { useEffect } from 'react';
import SimpleSlider from '../../components/Slider/Slider';
import { useActions } from '../../hooks/UseActions';
import GamesCards from '../../pageComponents/Games/GamesCards/GamesCards';
import GamesInfo from '../../pageComponents/Games/GamesInfo/GamesInfo';
import Layout from '../../pageComponents/Layout/Layout';
import styles from './Games.module.scss';


const Games = () => {
  const {gamesFetch} = useActions()
  useEffect(() => {
    gamesFetch()
  }, [])
  
  return (
    <Layout>
        <GamesCards />
        <GamesInfo />
        <div className={styles.Slider}>
            <SimpleSlider/>
          </div>
    </Layout>
  )
}

export default Games;