import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LoginFailure, LoginStart, LoginSuccess } from "../../context/Actions";
import { Context } from "../../context/Context";
import "./login.css";
function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    setError(false);
    event.preventDefault();
    dispatch(LoginStart());
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/login`, {
        username: userRef.current?.["value"],
        password: passwordRef.current?.["value"],
      });

     
      res.data && dispatch(LoginSuccess(res.data.userInfo));
    } catch (error) {
      setError(true);
      dispatch(LoginFailure());
      console.log(error);
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        {error && (
          <div className="errorMessage">
            <i
              className="close fa-solid fa-circle-xmark"
              onClick={setError.bind(this, false)}
            />
            <p>Something wrong here! </p>
          </div>
        )}
        <label>Username</label>
        <input
          // @ts-ignore
          ref={userRef}
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          onChange={setError.bind(this, false)}
        />

        <label>Password</label>
        <input
          // @ts-ignore
          ref={passwordRef}
          className="loginInput"
          type="Password"
          placeholder="Enter your password..."
          onChange={setError.bind(this, false)}
        />
        <button type="submit" className="loginButton" disabled={isFetching}>
          Login
        </button>
      </form>
      <Link className="link" to="/register">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  );
}

export default Login;
