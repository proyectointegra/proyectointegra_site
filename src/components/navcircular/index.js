import React from 'react';
import image from './bg-footer.png';
import { NavLink } from 'react-router-dom';

const Navcircular = ({ redirect, destination }) => {
  return (
    <div id="cta" className="parallax-container valign-wrapper">
      <div className="section no-pad-bot">
        <div className="container">
          <div className="row center">
            <h5>Conocé nuestros proyectos y apoyanos</h5>
            <NavLink
              className="btn-large waves-effect waves-light green lighten-1"
              to={redirect}
            >{destination}</NavLink>
          </div>
        </div>
      </div>
      <div className="parallax"><img src={image} alt="Unsplashed background img 3" /></div>
    </div>
  );
};

export default Navcircular;