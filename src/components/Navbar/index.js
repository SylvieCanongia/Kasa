import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';


const Navbar = () => {
  return (
    <nav>
      <div className="nav__container">
        <div className="nav__container__logo">
          <NavLink exact='true' to='/'>
            <div className="logo">
              <img src="./assets/images/logo.png" alt="Kasa logo" />
            </div>
          </NavLink>
        </div>
        <ul className='nav__container__menu'>
          <li className="homeLink">
            <NavLink exact='true' to='/'>
              Accueil
            </NavLink>
         </li>
         <li className="aboutLink">
            <NavLink exact='true' to='/about'>
              A propos
            </NavLink>
         </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;