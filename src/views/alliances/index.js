import React from 'react';
import Layout from '../../components/layout';
import UniversityContainer from './components/universityContainer';
import Settings from '../../components/_settings';
import image from './bg-voluntariado.png';

class Alliances extends React.Component {
  render() {
    return (
      <Layout
        title='Trabajo Comunal Universitario'
        slogan='Qué hacer y a dónde hacerlo'
        destination='Blog'
        redirect={Settings.BLOG}
        image={image}
      >
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 center">
                <h3><i className="mdi-content-send brown-text"></i></h3>
                <h4>Juntos por un futuro mejor </h4>
                <p className="left-align light">INTEGRA es el programa ideal para hacer tu TCU, contamos actualmente con distintas instituciones beneficiarias a lo largo de la Gran Área Metropolitana, con flexibilidad de horarios y actividades para realizar, entre las cuales se encuentran: tutorías sobre la materia de tu elección, preparación de distintos talleres y actividades recreativas, que ayuden a nuestra población beneficiaria a una mejor integración en el país.</p>
              </div>
            </div>
          </div>
        </div>
        <UniversityContainer></UniversityContainer>
      </Layout>
    );
  }
};

export default Alliances;