import { Link } from "react-router-dom";
import moment from "moment";

import useInput from "../../../hooks/UseInput";
import { useActions } from "../../../hooks/UseActions";

import styles from "./UnPunlishedAdd.module.scss";

const UnPunlishedAdd = () => {


  const titleValid = useInput("", { isEmpty: true, minLength: 5 });
  const tagsValid = useInput("", { isEmpty: true, minLength: 5 });
  const descriptionValid = useInput("", { isEmpty: true, minLength: 5 });
  const {mainAdd} = useActions()
  // считываю текущие значения со всех инпутов
  const GetTime = () => {
    return moment().format('ll');; // получаю текущую дату для поста
  };
  
  const CreatePost = () => {
    const post = {
      tags: tagsValid.value,
      title: titleValid.value,
      description: descriptionValid.value,
      type : 'unpublished',
      date : GetTime(),
    };
    mainAdd(post)
  };

  const isValid =
    !titleValid.value || !tagsValid.value || !descriptionValid.value;

  return (
    <form className={styles.form}>
      <div className={styles.AddPostForm}>
        <div className={styles.AddPostFormContainer}>
          <div className={styles.AddPostFormText}>Создание поста</div>
        </div>

        {titleValid.isDirty && titleValid.isEmpty && (
          <div className={styles.error}>Поле не может быть пустым</div>
        )}
        {titleValid.isDirty && titleValid.minLengthError && (
          <div className={styles.error}>
            Рекомендуемая длина поля - 5 или больше
          </div>
        )}
        <input
          type="text"
          placeholder="Заголовок"
          className={styles.AddPostFormTitle}
          onChange={(e) => titleValid.onChange(e)}
          onBlur={(e) => titleValid.onBlur(e)}
          value={titleValid.value}
        />
        {descriptionValid.isDirty && descriptionValid.isEmpty && (
          <div className={styles.error}>Поле не может быть пустым</div>
        )}
        {descriptionValid.isDirty && descriptionValid.minLengthError && (
          <div className={styles.error}>
            Рекомендуемая длина поля - 5 или больше
          </div>
        )}
        <input
          type="text"
          placeholder="Описание"
          className={styles.AddPostFormAutor}
          onChange={(e) => descriptionValid.onChange(e)}
          onBlur={(e) => descriptionValid.onBlur(e)}
          value={descriptionValid.value}
        />

        {tagsValid.isDirty && tagsValid.isEmpty && (
          <div className={styles.error}>Поле не может быть пустым</div>
        )}
        {tagsValid.isDirty && tagsValid.minLengthError && (
          <div className={styles.error}>
            Рекомендуемая длина поля - 5 или больше
          </div>
        )}
        <input
          type="text"
          placeholder="Теги"
          className={styles.AddPostFormTags}
          onChange={(e) => tagsValid.onChange(e)}
          onBlur={(e) => tagsValid.onBlur(e)}
          value={tagsValid.value}
        />

        <Link to="/">
          <button
            disabled={isValid}
            onClick={() => CreatePost()}
            className={styles.AddPostFormButton}
          >
            Создать пост
          </button>
        </Link>
      </div>
    </form>
  );
};

export default UnPunlishedAdd;
