import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Alliances from './alliances';
import Projects from './projects';
import About from './about';
import Settings from '../components/_settings';
import Blog from './blog';
import Galeria from './gallery';
import ApplicationForm from './alliances/components/applicationForm';


const ScrollTop = () => {

  return <></>;
}
const Routes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Switch>
        <Route expath path={Settings.ABOUT} component={About} />
        <Route expath path={Settings.ALLIANCES} component={Alliances} />
        <Route expath path={Settings.PROJECTS} component={Projects} />
        <Route expath path={Settings.BLOG} component={Blog} />
        <Route expath path={Settings.GALLERY} component={Galeria} />
       
        <Route>
          <Redirect to={Settings.ABOUT} />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
