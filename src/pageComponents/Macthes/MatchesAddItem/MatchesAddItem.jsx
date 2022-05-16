import { Link } from "react-router-dom";

import useInput from "../../../hooks/UseInput";
import { useActions } from "../../../hooks/UseActions";

import styles from "./MatchesAddItem.module.scss";

const MatchesAddItem = () => {
  const titleValid = useInput("", { isEmpty: true, minLength: 5 });
  const team1Valid = useInput("", { isEmpty: true, minLength: 1 });
  const team2Valid = useInput("", { isEmpty: true, minLength: 1 });
  const checkValid = useInput("", { isEmpty: true, minLength: 1 });
  const timeValid = useInput("", { isEmpty: true, minLength: 1 });
  const tournamentValid = useInput("", { isEmpty: true, minLength: 1 });
  const timeLeftValid = useInput("", { isEmpty: true, minLength: 1 });

  const { matchesAdd } = useActions();
  // считываю текущие значения со всех инпутов

  const CreateMatch = () => {
    const match = {
      title: titleValid.value,
      team1: team1Valid.value,
      team2: team2Valid.value,
      check: checkValid.value,
      time: timeValid.value,
      tournament: tournamentValid.value,
      timeLeft: timeLeftValid.value,
      type: "unpublished",
    };
    matchesAdd(match);
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

        {team1Valid.isDirty && team1Valid.isEmpty && (
          <div className={styles.error}>Поле не может быть пустым</div>
        )}
        {team1Valid.isDirty && team1Valid.minLengthError && (
          <div className={styles.error}>
            Рекомендуемая длина поля - 5 или больше
          </div>
        )}
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
        <input
          type="text"
          placeholder="Время"
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
        <input
          type="text"
          placeholder="Теги"
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
        <input
          type="text"
          placeholder="Теги"
          className={styles.AddPostFormTags}
          onChange={(e) => timeLeftValid.onChange(e)}
          onBlur={(e) => timeLeftValid.onBlur(e)}
          value={timeLeftValid.value}
        />

        <Link to="/">
          <button
            disabled={isValid}
            onClick={() => CreateMatch()}
            className={styles.AddPostFormButton}
          >
            Создать матч
          </button>
        </Link>
      </div>
    </form>
  );
};

export default MatchesAddItem;
