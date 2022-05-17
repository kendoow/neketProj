import { useSelector } from "react-redux";
import useImage from "../../../hooks/useImage";

import styles from "./GamesInfo.module.scss";

const GamesInfo = () => {
  const {
    id,
    name,
    title,
    date,
    category,
    description,
    OC,
    CPU,
    RAM,
    VideoCard,
    Disk,
    bgImg,
  } = useSelector((state) => state.games.selectedGame);
  const {image} = useImage(bgImg)
  
  return (
    <div className={styles.Container}>
      <div className={styles.BlockImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.Block}>
        <div className={styles.Title}>
            {title} 
        </div>
        <div className={styles.Date}>
          <span>Дата выхода:</span> {date}
        </div>
        <div className={styles.Category}>
          <span>Жанр:</span> {category}
        </div>
        <div className={styles.Description}>
          <span>Описание:</span> {description}
        </div>
      </div>
      <div className={styles.ContainerRequirements}>
        <div className={styles.Title}>Системные требования {name}</div>
        <div className={styles.BlockRequirements}>
          <div className={styles.Text}>
            <span>ОС:</span> {OC}
          </div>
          <div className={styles.Text}>
            <span>Процессор:</span> {CPU}
          </div>
          <div className={styles.Text}>
            <span>Оперативная память:</span> {RAM}
          </div>
          <div className={styles.Text}>
            <span>Видеокарта:</span> {VideoCard}
          </div>
          <div className={styles.Text}>
            <span>Место на диске:</span> {Disk}
          </div>
        </div>
        <div className={styles.Line}></div>
        <div className={styles.BlockRequirements}>
          <div className={styles.Text}>
            <span>ОС:</span> {OC}
          </div>
          <div className={styles.Text}>
            <span>Процессор:</span> {CPU}
          </div>
          <div className={styles.Text}>
            <span>Оперативная память:</span> {RAM}
          </div>
          <div className={styles.Text}>
            <span>Видеокарта:</span> {VideoCard}
          </div>
          <div className={styles.Text}>
            <span>Место на диске:</span> {Disk}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesInfo;
