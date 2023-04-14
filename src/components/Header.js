import logo from "../images/logo/logo.svg";

function Header({emailData, signOut}) {
  return (
    <header className="header">
      <img
        src={logo}
        alt=" Логотип сайта mesto."
        className="header__logo"
      />
      <nav className="header__nav-menu">
        <div className="header__burger">
          <div className="header__burger-menu"></div>
        </div>
        <ul className="header__links-menu">
          <li className="header__link-menu">{emailData}</li>
          <li className="header__link-menu">
            <button onClick={signOut} className="header__link-out">Выйти</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;