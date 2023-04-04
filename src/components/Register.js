import React from 'react';
import {Link} from "react-router-dom";

function Register(props) {
  return (
    <>
      <header className="header header_space-between">
        <img src="/static/media/logo.e1792cd1bf55c68d1538deb5b248d425.svg"
             alt=" Логотип сайта mesto." className="header__logo"/>
        <Link to="/sign-in" className="header__link">Войти</Link>
      </header>
      <main className="content">
        <div className="auth">
          <h2 className="auth__title">Регистрация</h2>
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
            <button type="submit" className="auth__button">Зарегистрироваться</button>
            <p className="auth__text-login">
              Уже зарегистрированы?&nbsp;
              <Link to="/sign-in" className="auth__link-login">Войти</Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}

export default Register;