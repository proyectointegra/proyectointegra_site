import React from 'react';
import Task from './task';
import ApplyForm from './applyForm';
import ImageSlider from '../ImageSlider';


const Jobs = () => {
  return (
    <div className="section">
      <ApplyForm></ApplyForm>
      <div className="row">
        <div className="col s12 center">
          <h6>Voluntariados disponibles</h6>

          <hr />
        </div>
      </div>
     

      <div className="row">
      <div className="col s12 m4 xl4">
          <Task
            title='Tutorías'
            description='Buscamos personas con el don de pedagogía para brindar tutorías sobre diversas materias de la malla curricular.'
            schedule={['S: 8:00 am - 6:00 pm', 'D: 8:00 am - 6:00 pm']}
          ></Task>
        </div>
        <div className="col s12 m4 xl4">
          <Task
            title='Preparación de talleres'
            description='Construcción de talleres sobre distintos temas de interés, robótica, bullying, valores, uso de excel, club de lectura.'
            schedule={['S: 8:00 am - 6:00 pm', 'D: 8:00 am - 6:00 pm']}
          ></Task>
        </div>
        <div className="col s12 m4 xl4">
          <Task
            title='Coordinación de actividades'
            description='Preparación y coordinación de campeonatos deportivos, actividades recreativas, paseos educativos, etc.'
            schedule={['S: 8:00 am - 6:00 pm', 'D: 8:00 am - 6:00 pm']}
          ></Task>
        </div>
      </div>
      <div className='row center'>
        <a className="waves-effect waves-light btn green modal-trigger" href="#modal-proyecto">Aplicar</a>
      </div>

      <div className="row">
        <div className="col s12 center">
          <p className="light">Si ninguna de las plazas disponibles te funciona pero querés proponernos un proyecto o una idea para colaborar <a href="#" className="green-text">contactanos</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Jobs;