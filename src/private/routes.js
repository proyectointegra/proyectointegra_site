import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DocumentsDisplay from './documents/display';
import VolunteerJobs from './volunteerjobs';
import Settings from '../components/_settings';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route expath path={Settings.PRIVATE_DOCUMENTS_DISPLAY} component={DocumentsDisplay} />
        <Route expath path={Settings.DOCUMENTS} component={VolunteerJobs} />
      </Switch>
    </>
  );
};

export default Routes;
