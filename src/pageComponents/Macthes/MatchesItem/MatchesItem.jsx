import styles from './MatchesItem.module.scss';

import teamImg from '../../../assets/Matches/team.svg';

const MatchesItem = ({id,
                      title,
                      team1, 
                      team2, 
                      check, 
                      time, 
                      tournament, 
                      timeLeft,
                    }) => {
  return (
    <div className={styles.Container}>
        <div className={styles.Title}>{title} - {id}</div>
        <div className={styles.BlockTeam}>
          <img src={teamImg} alt="" />
          <div className={styles.Name}>{team1}</div>
        </div>
        <div className={styles.Block}>
          <div className={styles.Date}>
            <div className={styles.DateItem}>{time}</div>
            <div className={styles.DateText}>{tournament}</div>
          </div>
          <div className={styles.Сheck}>{check}</div>
          <div className={timeLeft !== 'Live' 
                                   ? styles.TimeLeft  
                                   : styles.Time}>{timeLeft}</div>
        </div>
        <div className={styles.BlockTeam}>
          <img src={teamImg} alt="" />
          <div className={styles.Name}>{team2}</div>
        </div>
    </div>
  )
}

export default MatchesItem;