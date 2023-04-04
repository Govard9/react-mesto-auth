import React from 'react';
import {Link} from "react-router-dom";

function Login(props) {
  return (
    <>
      <header className="header header_space-between">
        <img src="/static/media/logo.e1792cd1bf55c68d1538deb5b248d425.svg"
             alt=" Логотип сайта mesto." className="header__logo"/>
        <Link to="/sign-up" className="header__link">Регистрация</Link>
      </header>
      <main className="content">
        <div className="auth">
          <h2 className="auth__title">Вход</h2>
          <form className="auth__form">
            <input
              type="email"
              name="mail"
              placeholder="Email"
              minLength="5"
              maxLength="254"
              className="auth__input"
              required
            />
            <input
              type="password"
              name="pass"
              placeholder="Пароль"
              minLength="8"
              maxLength="50"
              className="auth__input"
              required
            />
            <button type="submit" className="auth__button">Войти</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;