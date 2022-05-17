import moment from "moment";
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";
import useInput from "../../../hooks/UseInput";
import { useActions } from "../../../hooks/UseActions";

import styles from './UnPunlishedEdit.module.scss'

const UnPunlishedEdit = () => {
  const { unpublishedSelected } = useSelector((state) => state.main);
  const { mainEdit } = useActions();
  const descriptionValid = useInput(unpublishedSelected.description, {
    isEmpty: true,
  });
  
  const tagsValid = useInput(unpublishedSelected.tags, { isEmpty: true });
  const titleValid = useInput(unpublishedSelected.title, { isEmpty: true });

  const GetTime = () => {
    return moment().format('ll');; // получаю текущую дату для поста
  };
  
  const EditPost = () => {
    const post = {
      id: unpublishedSelected.id,
      tags: tagsValid.value,
      title: titleValid.value,
      description: descriptionValid.value,
      type: unpublishedSelected.type,
      img: unpublishedSelected.img,
      publishedAt: GetTime(),
    };
    mainEdit(post); // отправляю изменения на сервер(при клике на кнопку)
  };

  const isValid =
    !titleValid.value || !tagsValid.value || !descriptionValid.value;

  return (
    <>
    
      <div className={styles.container}>
      <div className={styles.title}>Редактирование постов</div>

        <div className={styles.Inputs}>
          {titleValid.isDirty && titleValid.isEmpty && (
            <div className={styles.error}>Поле не может быть пустым</div>
          )}
          <div className={styles.addText}>Заголовок</div>
          <input
            type="text"
            placeholder="Заголовок"
            className={styles.AddPostFormInput}
            onChange={(e) => titleValid.onChange(e)}
            onBlur={(e) => titleValid.onBlur(e)}
            value={titleValid.value}
          />
          {descriptionValid.isDirty && descriptionValid.isEmpty && (
            <div className={styles.error}>Поле не может быть пустым</div>
          )}
          <div className={styles.addText}>Описание</div>  
          <textarea
            type="text"
            placeholder="Описание"
            className={styles.AddPostFormDescr}
            onChange={(e) => descriptionValid.onChange(e)}
            onBlur={(e) => descriptionValid.onBlur(e)}
            value={descriptionValid.value}
          />
          {tagsValid.isDirty && tagsValid.isEmpty && (
            <div className={styles.error}>Поле не может быть пустым</div>
          )}
          <div className={styles.addText}>Теги</div>
          <input
            type="text"
            placeholder="Теги"
            className={styles.AddPostFormInput}
            onChange={(e) => tagsValid.onChange(e)}
            onBlur={(e) => tagsValid.onBlur(e)}
            value={tagsValid.value}
          />
          <Link to = '/'>
          <button
            disabled={isValid}
            onClick={() => EditPost()}
            className={styles.AddPostFormButton}
          >
            Отредактировать пост
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UnPunlishedEdit;
