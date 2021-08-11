import React from 'react';
import LeafMap from '../leafMap';
import M from 'materialize-css';
import Map from '../ally/map';
import AllyDetails from './allyDetails';

class AllyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    }
  }

  componentDidMount() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  }

  handleClick = (event) => {
    const { title } = event.target;

    this.setState({
      selected: title
    });
  }

  render() {
    const { selected } = this.state;

    return (
      <div className='row'>
        <div className='col s6'>
          <Map
            locationName={selected}
          ></Map>
        </div>
        <div className='col s6'>
          <ul className="collapsible">
            <li className='active'>
              <div onClick={this.handleClick} title='Sifais' className="collapsible-header"><strong>Sifais</strong></div>
              <div className="collapsible-body">
                <AllyDetails
                  name='SIFAIS'
                  description='SIFAIS es una iniciativa que promueve la integración social a través de la enseñanza.'
                  schedule={['Sábado: 8:00 am - 6:00 pm', 'Domingo: 8:00 am - 12:00 pm']}
                  webSite='https://www.sifais.org/'
                ></AllyDetails>
              </div>
            </li>
            <li>
              <div onClick={this.handleClick} title='Alimentando Esperanzas' className="collapsible-header"><strong>Alimentando Esperanzas</strong></div>
              <div className="collapsible-body">
                <AllyDetails
                  name='Alimentando Esperanzas'
                  description='Asociación enfocada en brindar apoyo a la infancia y adolescencia, mediante un comedor infantil y apoyo educativo.'
                  schedule={['Lunes a viernes, 1pm a 7pm']}
                  webSite='https://alimentandoesperanzas.org/'
                />
              </div>
            </li>
            <li>
              <div onClick={this.handleClick} title='Fundacion Daadios' className="collapsible-header"><strong>Fundacion Daadios</strong></div>
              <div className="collapsible-body">
                <AllyDetails
                  name='Daadios'
                  description='Fundación enfocada en el apoyo académico mediante el otorgamiento de becas basadas en la meritocracia.'
                  schedule={[
                    'Lunes a viernes de 4:30 a 7:30pm (durante período escolar)',
                    'Lunes a viernes de 8:00am a 6:00pm (vacaciones)',
                    'Sábados por convocatoria de actividades'
                  ]}
                />
              </div>
            </li>
            <li>
              <div onClick={this.handleClick} title='Educacion plus' className="collapsible-header"><strong>Educacion plus</strong></div>
              <div className="collapsible-body">
                <AllyDetails
                  name='Educación Plus'
                  description='Somos una asociación sin fines de lucro que trabaja activa e integralmente contra la deserción escolar en zonas urbano marginales con niños, niñas y jóvenes en alto riesgo social.'
                  schedule={['Tenemos un horario flexible.']}
                  webSite='http://www.educacionplus.org/'
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default AllyContainer;