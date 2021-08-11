import React from 'react';

const Description = ({ name, description }) => {
  return (
    <div className="row">
      <div className="col s10 center">
        <h5>{name}</h5>
        <p className="light">{description}</p>
      </div>
    </div>
  );
};

export default Description;