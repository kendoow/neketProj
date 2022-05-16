import { Link, useNavigate } from "react-router-dom";

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
  
  return (
    <div className={styles.Container}>
      <div className={styles.Title}>
        {title} - {id}
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
        <div className={timeLeft !== "Live" ? styles.TimeLeft : styles.Time}>
          {timeLeft}
        </div>
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
