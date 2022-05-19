import { useEffect, useState } from 'react';

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
  // Таймер
  const [Time, setTime] = useState(+timeLeft)
  const [TimeHMS, setTimeHMS] = useState({h: '', m: '', s: ''})
  useEffect(() => {
    if (Time !== 'Live') {
      const interval = setInterval(() => {
        setTime(Time ? Time - 1 : 'Live')
      }, 1000)
      setTimeHMS({
        h: Math.floor(Time / (3600)),
        m: Math.floor(Time / 60) - Math.floor(Time / (3600)) * 60,
        s: Time - (Math.floor(Time / 60) - Math.floor(Time / (3600)) * 60) * 60 - Math.floor(Time / (3600)) * 3600,
      })
      return () => {
        clearInterval(interval)
      }
    }
  }, [Time])

  return (
    <div className={styles.Container}>
        <div className={styles.Title}>{title}</div>
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
          {Time !== 'Live'
                    ? <div className={styles.TimeLeft}>{TimeHMS.h}h:{TimeHMS.m}:m{TimeHMS.s}:s</div> 
                    : <div className={styles.Time}>{Time}</div>}
        </div>
        <div className={styles.BlockTeam}>
          <img src={teamImg} alt="" />
          <div className={styles.Name}>{team2}</div>
        </div>
    </div>
  )
}

export default MatchesItem;