import React from 'react';
import { NavLink } from 'react-router-dom';
import Settings from '../../components/_settings';

const Navbar = () => {
  return (
    <nav className="green lighten-2" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="index.html" className="brand-logo">Logo</a>
        <ul className="right hide-on-med-and-down">
          <li><NavLink className='white-text' to={Settings.PRIVATE_DOCUMENTS_DISPLAY}>Cerrar Sesion</NavLink></li>
        </ul>
        <ul className="right hide-on-med-and-down">
          <li><NavLink className='white-text' to={Settings.PRIVATE_VOLUNTEER_JOBS}>Voluntariado</NavLink></li>
        </ul>
        <ul id="nav-mobile" className="sidenav">
          <li><NavLink to={Settings.PRIVATE_DOCUMENTS_DISPLAY}>Documentos</NavLink></li>
          <li><NavLink className='white-text' to={Settings.PRIVATE_VOLUNTEER_JOBS}>Voluntariado</NavLink></li>
        </ul>
        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>
    </nav>
  );
};

export default Navbar;