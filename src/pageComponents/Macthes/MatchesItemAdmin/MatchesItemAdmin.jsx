import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/UseActions";

import styles from "./MatchesItemAdmin.module.scss";

import teamImg from "../../../assets/Matches/team.svg";
import aproveIcon from "../../../assets/icons/aproveIcon.svg";
import deleteIcon from "../../../assets/icons/deleteIcon.png";
import editIcon from "../../../assets/icons/editIcon.svg";

const MatchesItemAdmin = ({
  id,
  title,
  team1,
  team2,
  check,
  time,
  tournament,
  timeLeft,
  type,
}) => {
  const { matchesDelete, matchesType, matchesSelected } = useActions();
  const { auth } = useSelector((state) => state);
  const { matches } = useSelector((state) => state.matches);
  const match = {
      id: id,
      title: title,
      team1: team1,
      team2: team2,
      check: check,
      time: time,
      tournament: tournament,
      timeLeft: timeLeft,
      type: type
  }
  const navigate = useNavigate();
  const handleSelectedMatch = (match) => {
    matchesSelected(match)
  }

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
      <div className={styles.Title}>
        {title}
      </div>
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
      <div className={styles.BlockBtn}>
        {auth.type === "Admin" ? (
          <img
            className={
              type === "unpublished" ? styles.BtnItem : styles.BtnActive
            }
            disabled={type !== "unpublished"}
            src={aproveIcon}
            alt=""
            onClick={() => {
              if (type === 'unpublished') {
                navigate("/matches");
              }
              matchesType(matches, id, 'passing');
            }}
          />
        ) : null}
        <Link 
         to="/editMatch"
         onClick={() => handleSelectedMatch(match)}>
          <img className={styles.BtnItem} src={editIcon} alt="" />
        </Link>
        <img
          className={styles.BtnItem}
          src={deleteIcon}
          alt=""
          onClick={() => {
            matchesDelete(id);
            
          }}
        />
      </div>
    </div>
  );
};

export default MatchesItemAdmin;
