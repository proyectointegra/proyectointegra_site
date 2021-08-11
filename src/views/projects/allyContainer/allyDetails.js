import React from 'react';

const AllyDetails = ({ description, schedule, webSite }) => {
  const renderSchedule = schedule.map((entry, index) => {
    return <p key={`${entry}-${index}`} className='light'>{entry}</p>
  });

  return (
    <>
      <p className="light">{description}</p>
      <div>
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
    </>
  );
};

export default AllyDetails;