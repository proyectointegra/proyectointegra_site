import React from 'react';
import M from 'materialize-css';
import Layout from '../../components/layout';
import Settings from '../../components/_settings';
import image from './bg-main.png';
import transparent from './transparent1.png';

class About extends React.Component {

  componentDidMount() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
      interval: 10000
    });
  }

  render() {
    return (
      <Layout
        title='Proyecto Integra'
        slogan='Educar para integrar'
        destination='Ver Proyectos'
        redirect={Settings.PROJECTS}
        image={image}
      >
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12">
                <blockquote>Fundación enfocada en brindar apoyo académico integral a personas menores de edad refugiadas, migrantes y de escasos recursos en Costa Rica.</blockquote>
                <p className="left-align light">Acceso a la Educación</p>
                <p className="left-align light">Acorde a la Declaración Universal de los Derechos Humanos y la Constitución Política de Costa Rica, el acceso a la educación es un Derecho Humano. Sin embargo, las oportunidades de acceso a sistemas de educación continuos y de calidad siguen siendo un desafío. A partir del conocimiento de esta realidad y la falta de proyectos enfocados en la integración de la población inmigrante, refugiada y personas menores de edad en riesgo social, indistintamente de su estatus migratorio, en sus comunidades de acogida en Costa Rica, es que nace la Fundación Integra Educación. Una iniciativa social que busca brindar soluciones de incorporación a su población beneficiaria mediante acompañamiento académico integral y la creación de espacios de recreación, tanto para los menores de edad, como sus familias.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 center">
                <h3><i className="mdi-content-send brown-text"></i></h3>
                <h4>INTEGRA</h4>
                <p className="left-align light">Es un programa social que vincula a estudiantes universitarios y voluntarios a personas menores de edad, indistintamente de su estatus migratorio. Con el fin de crear proyectos mediante los cuales se brinde apoyo académico a las comunidades beneficiarias y así, luchar contra la deserción escolar.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 center">
                <h3><i className="mdi-content-send brown-text"></i></h3>
                <h5>¿Qué hacemos?</h5>
              </div>
            </div>

            <div className="row">
              <div className="col s12 m3">
                <div className="icon-block">
                  <h2 className="center green-text"><i className="material-icons">call_merge</i></h2>
                  <p className="light">Generamos un vínculo entre voluntarios o  estudiantes que desean hacer su TCU mediante acción social, con la institución que alberga la población beneficiaria.</p>
                </div>
              </div>
              <div className="col s12 m3">
                <div className="icon-block">
                  <h2 className="center green-text"><i className="material-icons">chat_bubble_outline</i></h2>
                  <p className="light">Entrevistamos, seleccionamos y capacitamos a los estudiantes, en temas de Derechos Humanos y sensibilización poblacional.</p>
                </div>
              </div>
              <div className="col s12 m3">
                <div className="icon-block">
                  <h2 className="center green-text"><i className="material-icons">list</i></h2>
                  <p className="light">Construcción de proyectos de acompañamiento académico integral  académicos dirigidos al apoyo de la población beneficiaria, los cuales podrán ser impartidos con gran flexibilidad de horarios y en diversas localidades.</p>
                </div>
              </div>
              <div className="col s12 m3">
                <div className="icon-block">
                  <h2 className="center green-text"><i className="material-icons">menu_book</i></h2>
                  <p className="light">Generamos actividades y diversos proyectos adicionales, relacionados al fomento de la educación integral a nivel nacional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid grey lighten-3'>
          <div className='section'>
            <div className="row">
              <div className="col s12 center">
                <h3><i className="mdi-content-send brown-text"></i></h3>
                <h5>¡Experiencias!</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col s8 push-s2'>
                <div className="slider">
                  <ul className="slides grey lighten-3 black-text">
                    <li>
                      <img src={transparent} />
                      <div className="caption center-align black-text">
                        <i className="fas fa-quote-left"></i>
                        <span style={{ fontSize: '18px' }}>Me parece que la experiencia del TCU humaniza y es necesaria en nuestro proceso de formación profesional. Trabajar con Educación Plus me ha dejado una gran satisfacción al ver su compromiso con las comunidades de Alajuelita, Pavas y los Guido. Aprendí mucho observando que día con día aportan con amor y profesionalismo colaboración a jóvenes menores de edad de dichas comunidades. Espero que mas estudiantes universitarios puedan colaborar con esta labor. </span>
                        <i className="fas fa-quote-right"></i>
                        <h5 className="light text-lighten-3">Josseline Gomez</h5>
                        <p className='grey-text'>Universidad Americana - Educación Plus</p>
                      </div>
                    </li>
                    <li>
                      <img src={transparent} />
                      <div className="caption center-align black-text">
                        <i className="fas fa-quote-left"></i>
                        <span style={{ fontSize: '18px' }}>SIFAIS ha sido una experiencia llena de aprendizaje, no solo para los chicos con los que hemos trabajado, sino para nosotros mismos también. Un nuevo reto que, con el espíritu y energía de los niños, se ha podido cumplir de la mejor manera.</span>
                        <i className="fas fa-quote-right"></i>
                        <h5 className="light text-lighten-3">Mariel Barrientos</h5>
                        <p className='grey-text'>Universidad de La Salle - SIFAIS</p>
                      </div>
                    </li>
                    <li>
                      <img src={transparent} />
                      <div className="caption center-align black-text">
                        <i className="fas fa-quote-left"></i>
                        <span style={{ fontSize: '18px' }}>Trabajar para el Proyecto Integra ha sido una experiencia bastante positiva. A mí, personalmente, me abrieron las puertas para hacer mi TCU en instituciones que realmente se preocupan por el bienestar integral de nuestra niñez y adolescencia. Además, me han ayudado y orientado para hacer mi labor de manera efectiva. Me parece una excelente iniciativa que exista una organización que consiga el recurso humano necesario para aquellas instituciones que no disponen de él.</span>
                        <i className="fas fa-quote-right"></i>
                        <h5 className="light text-lighten-3">Martín Fallas</h5>
                        <p className='grey-text'>Universidad Americana (UAM) - DAADIOS</p>
                      </div>
                    </li>
                    <li>
                      <img src={transparent} />
                      <div className="caption center-align black-text">
                        <i className="fas fa-quote-left"></i>
                        <span style={{ fontSize: '18px' }}>Integra es un equipo de profesionales que busca establecer el vínculo más idóneo entre Estudiantes y Empresas para realizar el TCU, realmente estoy muy satisfecho con el servicio brindado, el cual como su nombre bien lo indica, es un abordaje integral a la realidad Socio / Estudiantil de Costa Rica.</span>
                        <i className="fas fa-quote-right"></i>
                        <h5 className="light text-lighten-3">Andrés Araya</h5>
                        <p className='grey-text'>Universidad La Salle - SIFAIS</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default About;