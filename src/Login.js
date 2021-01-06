import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          alt="Amazone Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        />
        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
              
          </form>
        </div>
      </Link>
    </div>
  );
}

export default Login;
