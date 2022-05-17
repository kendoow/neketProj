import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/UseActions";

import styles from "./NewsItemAdmin.module.scss";

import aproveIcon from "../../../assets/icons/aproveIcon.svg";
import deleteIcon from "../../../assets/icons/deleteIcon.png";
import editIcon from "../../../assets/icons/editIcon.svg";
import useImage from "../../../hooks/useImage";


const NewsItemAdmin = ({ title, date, tags, img, id, type, description }) => {
  const { mainDelete, mainType, mainSelected } = useActions();
  const { auth } = useSelector((state) => state);
  const { news } = useSelector((state) => state.main);
  const navigate = useNavigate();
  const {image} = useImage(img)
    
  const post = {
    title: title,
    date: date,
    tags: tags,
    id: id,
    type: type,
    description: description,
    img: img, 
  }
  const hadleSelectPost = (post) => {
    mainSelected(post)
  };
  
  return (
    <div className={styles.Container}>
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
        <img src={image} alt="icon" />
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
                navigate("/");
              }
              mainType(news, id, "common");
            }}
          />
        ) : null}
        <Link onClick={() => hadleSelectPost(post)} to = '/editPost'>
        <img className={styles.BtnItem} src={editIcon} alt="" />
        </Link>
        <img
          className={styles.BtnItem}
          src={deleteIcon}
          alt=""
          onClick={() => {
            mainDelete(id);
          }}
        />
      </div>
    </div>
  );
};

export default NewsItemAdmin;
