import styles from "./UnPunlishedNewsItem.module.scss";
import editIcon from "../../assets/icons/editIcon.svg";
import deleteIcon from "../../assets/icons/deleteIcon.png";
import aproveIcon from "../../assets/icons/aproveIcon.svg";
import { useSelector } from "react-redux";
import useInput from "../../hooks/UseInput";
import { useActions } from "../../hooks/UseActions";
import moment from "moment";

const UnPunlishedNewsItem = ({}) => {
  const { unpublishedSelected } = useSelector((state) => state.main);
  const { mainFetch, EditUnpubilshedItem } = useActions();
  const descriptionValid = useInput(unpublishedSelected.description, {
    isEmpty: true,
  });
  const tagsValid = useInput(unpublishedSelected.tags, { isEmpty: true });
  const titleValid = useInput(unpublishedSelected.title, { isEmpty: true });

  const GetTime = () => {
    moment().format("YYYY MM DD"); // получаю текущую дату для поста
  };

  const EditPost = () => {
    const post = {
      id: unpublishedSelected.id,
      tags: [tagsValid.value],
      title: titleValid.value,
      description: descriptionValid.value,
      publishedAt: GetTime(),
    };
    EditUnpubilshedItem(post); // отправляю изменения на сервер(при клике на кнопку)
  };

  const isValid =
    !titleValid.value || !tagsValid.value || !descriptionValid.value;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.icons}>
          <img src={editIcon} alt="icon" />
          <img src={deleteIcon} alt="icon" />
          <img src={aproveIcon} alt="icon" />
        </div>

        <div className={styles.Inputs}>
          {titleValid.isDirty && titleValid.isEmpty && (
            <div className={styles.error}>Поле не может быть пустым</div>
          )}
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
          <input
            type="text"
            placeholder="Теги"
            className={styles.AddPostFormInput}
            onChange={(e) => tagsValid.onChange(e)}
            onBlur={(e) => tagsValid.onBlur(e)}
            value={tagsValid.value}
          />
          <button
            disabled={isValid}
            onClick={() => EditPost()}
            className={styles.AddPostFormButton}
          >
            Отредактировать пост
          </button>
        </div>
      </div>
    </>
  );
};

export default UnPunlishedNewsItem;
