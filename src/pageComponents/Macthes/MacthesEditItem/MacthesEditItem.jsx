import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import useInput from "../../../hooks/UseInput";
import { useActions } from "../../../hooks/UseActions";

import styles from "./MacthesEditItem.module.scss";

const MacthesEditItem = () => {
  const { unpublishedSelected } = useSelector((state) => state.matches);
  const { matchesEdit } = useActions();
  console.log(unpublishedSelected)
  const titleValid = useInput(unpublishedSelected.title, {
    isEmpty: true,
    minLength: 5,
  });
  const team1Valid = useInput(unpublishedSelected.team1, {
    isEmpty: true,
    minLength: 1,
  });
  const team2Valid = useInput(unpublishedSelected.team2, {
    isEmpty: true,
    minLength: 1,
  });
  const checkValid = useInput(unpublishedSelected.check, {
    isEmpty: true,
    minLength: 1,
  });
  const timeValid = useInput(unpublishedSelected.time, {
    isEmpty: true,
    minLength: 1,
  });
  const tournamentValid = useInput(unpublishedSelected.tournament, {
    isEmpty: true,
    minLength: 1,
  });
  const timeLeftValid = useInput(unpublishedSelected.timeLeft, {
    isEmpty: true,
    minLength: 1,
  });

  const EditMatch = () => {
    const match = {
      id: unpublishedSelected.id,
      title: titleValid.value,
      team1: team1Valid.value,
      team2: team2Valid.value,
      check: checkValid.value,
      time: timeValid.value,
      tournament: tournamentValid.value,
      timeLeft: timeLeftValid.value,
      type: "unpublished",
    };
    matchesEdit(match);
  };

  const isValid =
    !titleValid.value ||
    !team1Valid.value ||
    !team2Valid.value ||
    !checkValid.value ||
    !timeValid.value ||
    !tournamentValid.value ||
    !timeLeftValid.value;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Редактирование постов</div>

        <div className={styles.Inputs}>
          {titleValid.isDirty && titleValid.isEmpty && (
            <div className={styles.error}>Поле не может быть пустым</div>
          )}
          {titleValid.isDirty && titleValid.minLengthError && (
            <div className={styles.error}>
              Рекомендуемая длина поля - 5 или больше
            </div>
          )}
          <div className={styles.Title}>Заголовок</div>
          <input
            type="text"
            placeholder="Заголовок"
            className={styles.AddPostFormTitle}
            onChange={(e) => titleValid.onChange(e)}
            onBlur={(e) => titleValid.onBlur(e)}
            value={titleValid.value}
          />

          {team1Valid.isDirty && team1Valid.isEmpty && (
            <div className={styles.error}>Поле не может быть пустым</div>
          )}
          {team1Valid.isDirty && team1Valid.minLengthError && (
            <div className={styles.error}>
              Рекомендуемая длина поля - 5 или больше
            </div>
          )}
          <div className={styles.Title}>Команда 1</div>
          <input
            type="text"
            placeholder="Команда 1"
            className={styles.AddPostFormAutor}
            onChange={(e) => team1Valid.onChange(e)}
            onBlur={(e) => team1Valid.onBlur(e)}
            value={team1Valid.value}
          />

          {team2Valid.isDirty && team2Valid.isEmpty && (
            <div className={styles.error}>Поле не может быть пустым</div>
          )}
          {team2Valid.isDirty && team2Valid.minLengthError && (
            <div className={styles.error}>
              Рекомендуемая длина поля - 5 или больше
            </div>
          )}
          <div className={styles.Title}>Команда 2</div>
          <input
            type="text"
            placeholder="Команда 2"
            className={styles.AddPostFormTags}
            onChange={(e) => team2Valid.onChange(e)}
            onBlur={(e) => team2Valid.onBlur(e)}
            value={team2Valid.value}
          />

          {checkValid.isDirty && checkValid.isEmpty && (
            <div className={styles.error}>Поле не может быть пустым</div>
          )}
          {checkValid.isDirty && checkValid.minLengthError && (
            <div className={styles.error}>
              Рекомендуемая длина поля - 5 или больше
            </div>
          )}
          <div className={styles.Title}>Счет</div>
          <input
            type="text"
            placeholder="Счет"
            className={styles.AddPostFormAutor}
            onChange={(e) => checkValid.onChange(e)}
            onBlur={(e) => checkValid.onBlur(e)}
            value={checkValid.value}
          />

          {timeValid.isDirty && timeValid.isEmpty && (
            <div className={styles.error}>Поле не может быть пустым</div>
          )}
          {timeValid.isDirty && timeValid.minLengthError && (
            <div className={styles.error}>
              Рекомендуемая длина поля - 5 или больше
            </div>
          )}
          <div className={styles.Title}>Время начала</div>
          <input
            type="text"
            placeholder="Время начала"
            className={styles.AddPostFormTags}
            onChange={(e) => timeValid.onChange(e)}
            onBlur={(e) => timeValid.onBlur(e)}
            value={timeValid.value}
          />

          {tournamentValid.isDirty && tournamentValid.isEmpty && (
            <div className={styles.error}>Поле не может быть пустым</div>
          )}
          {tournamentValid.isDirty && tournamentValid.minLengthError && (
            <div className={styles.error}>
              Рекомендуемая длина поля - 5 или больше
            </div>
          )}
          <div className={styles.Title}>Название турнира</div>
          <input
            type="text"
            placeholder="Название турнира"
            className={styles.AddPostFormTags}
            onChange={(e) => tournamentValid.onChange(e)}
            onBlur={(e) => tournamentValid.onBlur(e)}
            value={tournamentValid.value}
          />

          {timeLeftValid.isDirty && timeLeftValid.isEmpty && (
            <div className={styles.error}>Поле не может быть пустым</div>
          )}
          {timeLeftValid.isDirty && timeLeftValid.minLengthError && (
            <div className={styles.error}>
              Рекомендуемая длина поля - 5 или больше
            </div>
          )}
          <div className={styles.Title}>Сколько идет матч</div>
          <input
            type="text"
            placeholder="Время - сколько идет матч"
            className={styles.AddPostFormTags}
            onChange={(e) => timeLeftValid.onChange(e)}
            onBlur={(e) => timeLeftValid.onBlur(e)}
            value={timeLeftValid.value}
          />

          <Link to="/matches" className={styles.AddPostFormButton}>
            <button
              disabled={isValid}
              onClick={() => EditMatch()}
              className={styles.Btn}
            >
              Отредактировать матч
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MacthesEditItem;