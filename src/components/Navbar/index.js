import { NavLink } from "react-router-dom";
import "./navbar.scss";
import LogoNavbar from './logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav__container">
        <div className="nav__container__logo">
          <NavLink exact="true" to="/">
            <div className="logo">
              <img src={LogoNavbar} alt="Logo de Kasa" />
            </div>
          </NavLink>
        </div>
        <ul className="nav__container__menu">
          <li className="homeLink">
            <NavLink exact="true" to="/">
              Accueil
            </NavLink>
          </li>
          <li className="aboutLink">
            <NavLink exact="true" to="/about">
              A propos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
