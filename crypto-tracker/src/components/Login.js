import React, { useState } from "react";
import "../css/Login.css";

const initialState = {
  username: "",
  password: "",
};

function Login() {
  const [login, setLogin] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setLogin(initialState);
  };

  const onChange = (e) => {
    setLogin(e.target.name);
    console.log(e.target.name, "HERE");
  };

  return (
    <div className="login">
      <img
        src="https://images.unsplash.com/photo-1531479366421-2a6a8635277b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1409&q=80"
        alt="login"
      />
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <header>
            <h1>Welcome to Crypto-Tracker</h1>
          </header>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            id="username"
            value={login.username}
            onChange={onChange}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="text"
            id="password"
            value={login.password}
            onChange={onChange}
          />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
