import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActions } from "../../hooks/UseActions";

import MatchesItem from "../../pageComponents/Macthes/MatchesItem/MatchesItem";

import Layout from "../../pageComponents/Layout/Layout";

import styles from "./Matches.module.scss";
import { Link } from "react-router-dom";

const Matches = () => {
  const { matchesFetch } = useActions();
  const { matches } = useSelector((state) => state.matches);

  useEffect(() => {
    matchesFetch();
    window.scrollTo(0, 0)
  }, []);

  return (
    <Layout>
      <div className={styles.MainContainer}>
        <div className={styles.BlockTitle}>
          <h3 className={styles.Title}>Проходящие матчи</h3>
          <Link to='unpulishedmatches' className={styles.Btn}>Редактировать матчи</Link>
        </div>
        <div className={styles.Container}>
          {matches
            ? matches
                .filter((i) => i.type === "upcoming")
                .map((item) => (
                  <MatchesItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    team1={item.team1}
                    team2={item.team2}
                    check={item.check}
                    time={item.time}
                    tournament={item.tournament}
                    timeLeft={item.timeLeft}
                  />
                ))
            : null}
        </div>
        <h3 className={styles.Title}>Предстоящие матчи</h3>
        <div className={styles.Container}>
          {matches
            ? matches
                .filter((i) => i.type === "passing")
                .map((item) => (
                  <MatchesItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    team1={item.team1}
                    team2={item.team2}
                    check={item.check}
                    time={item.time}
                    tournament={item.tournament}
                    timeLeft={item.timeLeft}
                  />
                ))
            : null}
        </div>
      </div>
    </Layout>
  );
};

export default Matches;
