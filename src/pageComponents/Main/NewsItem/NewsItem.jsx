import { useState } from "react";

import Modal from '../../../components/Modal/Modal'

import styles from "./NewsItem.module.scss";

const NewsItem = ({ title, date, tags, img, descr }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div onClick={() => setModalActive(true)} className={styles.container}>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>
            Дата публикации: <span>{date}</span>
          </div>
          <div className={styles.Tags}>
            {tags.split(" ").map((item, index) => (
              <div key={index} className={styles.TagItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.img}>
          <img src={img} alt="icon" />
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={styles.modal}>
          <div className={styles.title}>{title}</div>
          <img src={img} alt="icon" />
          <div className={styles.descr}>{descr}</div>
          <div className={styles.date}>
            Дата публикации: <span>{date}</span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NewsItem;
