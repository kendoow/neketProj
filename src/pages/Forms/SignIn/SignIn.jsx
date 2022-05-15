import { useState } from "react";
import { Link } from "react-router-dom";

import useInput from "../../../hooks/UseInput";
import styles from "./SignIn.module.scss";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false); // скрыть показать пароль
  const registrationValid = useInput("", { isEmpty: true, minLength: 3 }); // валидатор логина
  const passwordValid = useInput("", { isEmpty: true, minLength: 5 }); // валидатор пароля
  const nameValid = useInput("", { isEmpty: true, minLength: 2 }); // валидатор Имени
  

  return (
    <>
      <div className={styles.registration}>
        <div className={styles.registrationForm}>
          <div className={styles.registrationText}>
            <div className={styles.registrationTitle}>
              <h3>Регистрация</h3>
            </div>
          </div>
          <div className={styles.registrationInputs}>
            <form>
              {nameValid.isDirty && nameValid.isEmpty && (
                <div className={styles.error}>Поле не может быть пустым</div>
              )}

              <input
                onChange={(e) => nameValid.onChange(e)}
                onBlur={(e) => nameValid.onBlur(e)}
                value={nameValid.value}
                type="text"
                name="registration"
                placeholder="Ваше имя"
              />

              {registrationValid.isDirty && registrationValid.isEmpty && (
                <div className={styles.error}>Поле не может быть пустым</div>
              )}
              {registrationValid.isDirty &&
                registrationValid.minLengthError && (
                  <div className={styles.error}>Некорректная длина логина</div>
                )}
              <input
                onChange={(e) => registrationValid.onChange(e)}
                onBlur={(e) => registrationValid.onBlur(e)}
                value={registrationValid.value}
                type="text"
                name="registration"
                placeholder="Логин"
              />

              {passwordValid.isDirty && passwordValid.isEmpty && (
                <div className={styles.error}>Поле не может быть пустым</div>
              )}
              {passwordValid.isDirty && passwordValid.minLengthError && (
                <div className={styles.error}>Некорректная длина пароля</div>
              )}
              <input
                onChange={(e) => passwordValid.onChange(e)}
                onBlur={(e) => passwordValid.onBlur(e)}
                value={passwordValid.value}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Пароль"
              />

              

              <label className={styles.passwordCheckboxWrapper}>
                <input
                  onClick={() => setShowPassword(!showPassword)}
                  type="checkbox"
                  className={styles.passwordCheckbox}
                />{" "}
                <div className={styles.passwordCheckboxContainer}>
                  Показать пароль
                </div>
              </label>
            </form>
          </div>

          <button
            disabled= {
              !registrationValid.inputVaild ||
              !passwordValid.inputVaild ||
              !nameValid.inputVaild 
             
            }
            type="submit"
          >
            Создать аккаунт
          </button>
          <div className={styles.registrationIsLogged}>
            <h4>Есть аккаунт?</h4>
            <Link to="/login">Войти</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;