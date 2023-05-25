import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Mesto"/>
      <nav className="header__auth">
        <p className="header__text">{props.mail}</p>
        <Link to={props.route} className="header__link" type="button" onClick={props.onClick}>{props.title}</Link>
      </nav>
    </header>
  )
}

export default Header;
