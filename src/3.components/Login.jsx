import React, { useEffect, useRef, useState } from "react";
import styles from "./Login.module.css";
import Button from "./Button";

const Login = (props) => {
  
  const username = useRef();
  const password = useRef();

  const [isPassFill, SetIsPassFill] = useState(false);
  const [isUserFill, SetIsUserFill] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(username.current.value, password.current.value);
  };

  const filledHandler = (e) => {
    if (e.target.value != "") {
      SetIsUserFill(true);
    } else {
      SetIsUserFill(false);
    }
  };

  const filledHandler2 = (e) => {
    if (e.target.value != "") {
      SetIsPassFill(true);
    } else {
      SetIsPassFill(false);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <form onSubmit={submitHandler}>
        <div className={`${styles.dataContainer}`}>
          <label htmlFor="username">نام کاربری</label>
          <input
            type="text"
            id="username"
            ref={username}
            onChange={filledHandler}
          />
        </div>

        <div className={`${styles.dataContainer}`}>
          <label htmlFor="password">رمز عبور</label>
          <input
            type="password"
            id="password"
            ref={password}
            onChange={filledHandler2}
          />
        </div>

        <div className={styles.submit}>
          <Button type="submit" isfilled={isPassFill && isUserFill}>
            ورود
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
