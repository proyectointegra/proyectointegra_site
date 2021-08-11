import React from 'react';
import LeafMap from '../leafMap';
import M from 'materialize-css';

class AllyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: {
        lat: 9.9596997,
        long: -84.150708
      },
      selected: 'Sifais'
    }
  }

  componentDidMount() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  }

  handleClick = (event) => {
    const { target } = event;
    const lat = target.getAttribute('lat');
    const long = target.getAttribute('long');
    const title = target.title;

    this.setState({
      focus: {
        lat,
        long,
      },
      selected: title
    });
  }

  render() {
    const { focus: { lat, long }, selected } = this.state;

    return (
      <div className='row'>
        <div className='col s8'>
          <LeafMap
            lat={lat}
            long={long}
            markerContent={`<b>${selected}</b>`}
          ></LeafMap>
        </div>
        <div className='col s4'>
          <ul className="collapsible">
          <li className="active">
              <div onClick={this.handleClick} lat={9.9596997} long={-84.150708} title='Sifais' className="collapsible-header">Sifais</div>
              <div className="collapsible-body">

              </div>
            </li>
            <li>
              <div onClick={this.handleClick} lat={9.9428102} long={-84.2236379} title='Alimentando Esperanzas' className="collapsible-header">Alimentando Esperanzas</div>
              <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
            <li>
              <div onClick={this.handleClick} lat={9.923126} long={-84.1383778} title='Fundacion Daadios' className="collapsible-header">Fundacion Daadios</div>
              <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
            <li>
              <div onClick={this.handleClick} lat={9.907304} long={-84.064492} title='Educacion plus' className="collapsible-header">Educacion plus</div>
              <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default AllyContainer;