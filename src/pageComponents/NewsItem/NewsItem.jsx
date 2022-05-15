import { useState } from "react";
import styles from "./NewsItem.module.scss";
import Modal from "../../components/Modal/Modal";
const NewsItem = ({ title, date, tags, img }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div onClick={() => setModalActive(true)} className={styles.container}>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>
            Дата публикации: <span>{date}</span>
          </div>
          <div className={styles.tags}>{tags}</div>
        </div>
        <div className={styles.img}>
          <img src={img} alt="icon" />
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="">12312313</div>
      </Modal>
    </>
  );
};

export default NewsItem;
