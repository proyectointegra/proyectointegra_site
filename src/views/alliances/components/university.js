import React from 'react';
import './style.css';

const University = ({ name, image, details }) => {
  return (
    <div>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator university-image" src={image} />
        </div>
        <div className="card-content">
          <span className="card-title grey-text text-darken-4">
            {name}
            {
              details &&
              <i className="material-icons right">more_vert</i>
            }
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{name}<i className="material-icons right">close</i></span>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default University;
