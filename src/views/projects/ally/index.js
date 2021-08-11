import React from 'react';
import Description from './description';
import Details from './details';
import PropTypes from 'prop-types';
import Carousel from './carousel';

const Ally = ({ name, description, schedule, webSite }) => {
  //  const schedule = ['Sábado: 8:00 am - 6:00 pm', 'Domingo: 8:00 am - 12:00 pm'];
  return (
    <>
      <Description
        name={name}
        description={description}
      ></Description>
      <Details
        place={name}
        schedule={schedule}
        webSite={webSite}
      ></Details>

      
      {
        false && <Carousel></Carousel>
        /*
        <div className="row">
          <div className="col s10">
            <img src="img/carousel.png" />
          </div>
        </div>
        */
      }
    </>
  );
};

Ally.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  schedule: PropTypes.array,
  webSite: PropTypes.string,
};

Ally.defaultProps = {
  schedule: [],
  webSite: ''
};

export default Ally;