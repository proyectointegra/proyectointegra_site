import React from 'react';

const Map = ({ locationName }) => {
  return (
    <div className="minimap"><div className="gmap_canvas"><iframe width="700" height="500" id="gmap_canvas" src={`https://maps.google.com/maps?q=${locationName}&t=&z=15&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
  );
};

export default Map;
