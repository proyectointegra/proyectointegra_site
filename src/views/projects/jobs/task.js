import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ title, description, schedule }) => {
  const renderSchedule = schedule.map((entry, index) => {
    return <div key={`${entry}-${index}`}>{entry}</div>
  });

  return (
    <div className="icon-block">
      <h6 className="light"><b>{title}</b></h6>
      <p>{description}</p>
      {
        false && schedule && schedule.length > 0 &&
        <p className="grey-text">
          <span className="grey-text text-darken-2"><i className="material-icons">access_time</i> Horarios disponibles</span><br />
          {renderSchedule}
        </p>
      }
      {
        //<a className="waves-effect waves-light btn green modal-trigger" href="#modal-proyecto">Aplicar</a>
      }
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  schedule: PropTypes.array
};

export default Task;