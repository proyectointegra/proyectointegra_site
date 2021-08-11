import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-materialize';
import images from './images';
import M from 'materialize-css';

class Cover extends React.Component {
  componentDidMount() {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }
  render() {
    const renderImage = <img src={images.background} />

    return (
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br /><br />
            <h1 className="header center">{this.props.title}</h1>
            <div className="row center">
              <h5 className="header col s12 light">{this.props.slogan}</h5>
            </div>
            <br /><br />
          </div>
        </div>
        <div className="parallax">
          <img src={this.props.image || images.background} />
        </div>
      </div>
    );
  }
};

Cover.propTypes = {
  title: PropTypes.string,
  slogan: PropTypes.string,
}

export default Cover;

// <div className="parallax"><img src="https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png" alt="Unsplashed background img 1"></img></div>
/*


*/