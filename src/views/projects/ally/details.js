import React from 'react';
import Map from './map';
import PropTypes from 'prop-types';

const Details = ({ place, schedule, webSite }) => {
  const renderSchedule = schedule.map((entry, index) => {
    return <p key={`${entry}-${index}`} className='light'>{entry}</p>
  });
  return (
    <div className="row">
      <div className="col s6">
        <Map locationName={place}></Map>
      </div>
      <div className="col s5">
        <h6>Horario</h6>
        {renderSchedule}
        {
          webSite &&
          <>
            <h6>Más información</h6>
            <p className="light"><a href={webSite} className="green-text">{webSite}</a></p>
          </>
        }
      </div>
    </div>
  );
};

Details.propTypes = {
  schedule: PropTypes.array,
  webSite: PropTypes.string
};

Details.defaultProps = {
  schedule: [],
  webSite: ''
};

export default Details;