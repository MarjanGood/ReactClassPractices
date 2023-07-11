import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import Button from "./Button";

const Login2 = (props) => {
  const [userData, setUserData] = useState({ user: "", password: "" });
  const [disabled, setDisable] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("use effect run");
      setDisable(userData.user.trim().length === 0 || userData.password.trim().length === 0 );
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [userData]);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(username.current.value, password.current.value);
  };
  const passwordChangeHandler = (e) => {
    setUserData((prev) => ({ ...prev, password: e.target.value }));
  };
  const usernameChangeHandler = (e) => {
    setUserData((prev) => ({ ...prev, user: e.target.value }));
  };
  return (
    <div className={styles.mainContainer}>
      <form onSubmit={submitHandler}>
        <div className={`${styles.dataContainer}`}>
          <label htmlFor="username">نام کاربری</label>
          <input type="text" id="username" value={userData.user} onChange={usernameChangeHandler} />
        </div>

        <div className={`${styles.dataContainer}`}>
          <label htmlFor="password">رمز عبور</label>
          <input type="password" id="password" value={userData.password} onChange={passwordChangeHandler}/>
        </div>

        <div className={styles.submit}>
          <Button type="submit" disabled={disabled}>
            ورود
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login2;
