import Layout from "../../pageComponents/Layout/Layout";
import styles from "./Matches.module.scss";
import MatchesItem from "../../pageComponents/MatchesItem/MatchesItem";
const Matches = () => {
  return (
    <>
      <Layout>
        <h3 className={styles.title}>
        Проходящие матчи
        </h3>
        <div className="">
          <MatchesItem></MatchesItem>
        </div>
      </Layout>
    </>
  );
};

export default Matches;
