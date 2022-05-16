import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useInput from "../../../hooks/UseInput";
import { AuthActionCreators } from "../../../redux/actionCreators/Auth/AuthActionCreator";
import styles from './Login.module.scss';
const Login = () => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false); // скрыть показать пароль
  const loginValid = useInput("", { isEmpty: true, minLength: 3 }); // валидатор логина
  const passwordValid = useInput("", { isEmpty: true, minLength: 5 }); // валидатор пароля
  let navigate = useNavigate();
  const submit = () => {
    dispatch(AuthActionCreators.login(loginValid.value,passwordValid.value))
    navigate("/", { replace: true });
     
  }

  return (
    <>
      <div className={styles.login}>
        <div className={styles.loginForm}>
          <div className={styles.loginText}>
            <h3>Вход</h3>
          </div>
          <div className={styles.loginInputs}>
            <form>
              {loginValid.isDirty && loginValid.isEmpty && (
                <div className={styles.error}>Поле не может быть пустым</div>
              )}
              {loginValid.isDirty && loginValid.minLengthError && (
                <div className={styles.error}>Некорректная длина логина</div>
              )}
              <input
                onChange={(e) => loginValid.onChange(e)}
                onBlur={(e) => loginValid.onBlur(e)}
                value={loginValid.value}
                type="text"
                name="login"
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
                Показать пароль
              </label>
            </form>
          </div>

              <button
                disabled={!loginValid.inputVaild || !passwordValid.inputVaild}
                type="submit"
                onClick={submit}
              >
                Войти
              </button>
            </div>
        </div>

    </>
  );
};

export default Login;