import React from 'react';
import L from 'leaflet';
import './style.css';

const zoomLevel = 10;

class LeafletMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mymap: null,
      marker: null,
    }
  }

  componentDidMount() {
    const { lat, long, markerContent } = this.props;

    console.log(this.props);
    var mymap = L.map('leafMap');
    this.setFocus(mymap, lat, long);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 10,
      id: 'mapbox/streets-v11',
      accessToken: 'pk.eyJ1Ijoic2thbCIsImEiOiJjazN2N2JtbHowZnBjM2VteWppNHA2bnoxIn0.q88JWaZLPzgHKSERbEtfDg'
    }).addTo(mymap);
    this.setMarker(mymap, lat, long, markerContent);
    this.setState({
      mymap,
    });
  }

  setFocus = (mymap, lat, long) => {
    if (!mymap) return;
    mymap.setView([lat, long], zoomLevel);
  }

  setMarker = (mymap, lat, long, markerContent) => {
    if (markerContent == '') return;
    let { marker } = this.state;

    if (marker) mymap.removeLayer(marker);

    marker = L.marker([lat, long]).addTo(mymap);
    marker.bindPopup(markerContent).openPopup();
    this.setState({
      marker,
    });
  }

  componentDidUpdate(prevProps) {
    const { lat, long, markerContent } = this.props;

    if (lat == prevProps.lat && long == prevProps.long) return;

    this.setFocus(this.state.mymap, lat, long);
    this.setMarker(this.state.mymap, lat, long, markerContent);
  }

  render() {
    return (
      <>
        <div id='leafMap'>
        </div>
      </>
    );
  }
};

LeafletMap.defaultProps = {
  lat: 0,
  long: 0,
  markerContent: ''
}

export default LeafletMap;
