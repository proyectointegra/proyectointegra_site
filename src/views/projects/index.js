import React from 'react';
import Layout from '../../components/layout';
import Ally from './ally';
import Jobs from './jobs';
import Settings from '../../components/_settings';

import image from './bg-proyectos.png';
import GoogleMap from './googlemaps'


class Projects extends React.Component {
  render() {
    return (
      <Layout
        title='Proyectos'
        slogan='Dónde y con quiénes trabajamos'
        destination='Ver Alianzas'
        redirect={Settings.ALLIANCES}
        image={image}
      >
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s13 center">
                <h4>Ayudando a educar de manera integral</h4>
                <p className="left-align light">INTEGRA trabaja directamente con niños, niñas y adolescentes residentes en comunidades urbano marginales ubicadas en la Gran Área Metropolitana, con el fin de ayudar a nuestra población beneficiaria a generar una mejor integración con su nueva comunidad.</p>
              </div>
            </div>
          </div>
        </div>
        <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}
        >
        <GoogleMap></GoogleMap>
       
        </div>
        
        
        <div className="container">
          <div className='section'>
         
          </div>
          {
            false &&
            <div className="section">
              <Ally
                name='SIFAIS'
                description='SIFAIS es una iniciativa que promueve la integración social a través de la enseñanza.'
                schedule={['Sábado: 8:00 am - 6:00 pm', 'Domingo: 8:00 am - 12:00 pm']}
                webSite='https://www.sifais.org/'
              />
              <Ally
                name='Alimentando Esperanzas'
                description='Asociación enfocada en brindar apoyo a la infancia y adolescencia, mediante un comedor infantil y apoyo educativo.'
                schedule={['Lunes a viernes, 1pm a 7pm']}
                webSite='https://alimentandoesperanzas.org/'
              />
              <Ally
                name='Daadios'
                description='Fundación enfocada en el apoyo académico mediante el otorgamiento de becas basadas en la meritocracia.'
                schedule={[
                  'Lunes a viernes de 4:30 a 7:30pm (durante período escolar)',
                  'Lunes a viernes de 8:00am a 6:00pm (vacaciones)',
                  'Sábados por convocatoria de actividades'
                ]}
              />

              <Ally
                name='Educación Plus'
                description='Somos una asociación sin fines de lucro que trabaja activa e integralmente contra la deserción escolar en zonas urbano marginales con niños, niñas y jóvenes en alto riesgo social.'
                schedule={[]}
                webSite='http://www.educacionplus.org/'
              />
            </div>
          }
          <Jobs></Jobs>
        </div>
      </Layout>
    );
  }
};

export default Projects;