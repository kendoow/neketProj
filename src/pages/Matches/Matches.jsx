import { useEffect } from "react";
import { useActions } from "../../hooks/UseActions";

import MatchesItem from "../../pageComponents/MatchesItem/MatchesItem";

import Layout from "../../pageComponents/Layout/Layout";

import styles from "./Matches.module.scss";
import { useSelector } from "react-redux";


const Matches = () => {
  const {matchesFetch} = useActions()
  const {matches} = useSelector(state => state.matches)

  useEffect(() => {
    matchesFetch()
  }, [])

  return (
    <Layout>
      <div className={styles.MainContainer}>
        <h3 className={styles.Title}>Проходящие матчи</h3>
        <div className={styles.Container}>
          {matches.upcoming 
                  ? matches.upcoming.map(item => (
                    <MatchesItem 
                    key={item.id} 
                    id={item.id}
                    title={item.title} 
                    team1={item.team1} 
                    team2={item.team2}
                    check={item.check}
                    time={item.time}
                    tournament={item.tournament}
                    timeLeft={item.timeLeft}/>))
                  : null}
        </div>
        <h3 className={styles.Title}>Предстоящие матчи</h3>
        <div className={styles.Container}>
          {matches.passing 
                  ? matches.passing.map(item => (
                    <MatchesItem 
                    key={item.id} 
                    id={item.id}
                    title={item.title} 
                    team1={item.team1} 
                    team2={item.team2}
                    check={item.check}
                    time={item.time}
                    tournament={item.tournament}
                    timeLeft={item.timeLeft}/>))
                  : null}
        </div>
      </div>
    </Layout>
  );
};

export default Matches;
