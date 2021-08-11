import React from 'react';
import GMapsContainer from './gMapsContainer';
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
      <GMapsContainer></GMapsContainer>
    );
  }
};

export default AllyContainer;