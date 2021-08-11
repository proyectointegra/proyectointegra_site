import React from 'react';
import University from './university';
import images from './images';
import ApplicationForm from './applicationForm';

const universities = [
  {
    name: 'Universidad Latina',
    image: images.ulatina,
    details: '',
  },
  {
    name: 'Universidad San Marcos',
    image: images.sanmarcos,
    details: '',
  },
  {
    name: 'U. Hispanoamericana',
    image: images.hispanoamericana,
    details: '',
  },
  {
    name: 'Universidad De La Salle',
    image: images.lasalle,
    details: '',
  },
  {
    name: 'Universidad Americana',
    image: images.uam,
    details: '',
  },
  {
    name: 'UCIMED',
    image: images.ucimed,
    details: '',
  }
];

const UniversityContainer = () => {
  const renderUniversities = universities.map((entry, index) => {
    return <div className='col s4 center'>
      <University
        name={entry.name}
        image={entry.image}
        details={entry.details}
      ></University>
    </div>
  });


  return (
    <div className="container">
      <ApplicationForm></ApplicationForm>
      <div className="section">
        <div className="row">
          <div className="col s12 center">
            <h5>UNIVERSIDADES CON LAS QUE TENEMOS ALIANZAS</h5>
            <p className="light">Si sos estudiante de alguna de estas universidades, ¡hacé tu TCU con nosotros! Solo tenés que enviar el formulario de tu universidad y te enviaremos la información que necesités para que podás tramitar y empezar tu TCU.</p>
          </div>
        </div>
        <div className='row'>
          {renderUniversities}
        </div>
        <div className='row center'>
          <div className="icon-block">
            <a className="waves-effect waves-light btn green modal-trigger" href="#modal-universidad">Aplicar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityContainer;
