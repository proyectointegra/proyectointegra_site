import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './views/routes';
import PrivateRoutes from './private/routes';
//import './views/gallery/gallery.css';

const isLoggedIn = () => {
  return false;
}

function App() {
  return (
    <Router
      basename='/'
    >
      <div className="App">
        {
          !isLoggedIn() ?
            <Routes></Routes> :
            <PrivateRoutes></PrivateRoutes>
        }
      </div>
    </Router>
  );
}

export default App;
