import React from 'react';
import Navbar from '../navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className='container'>
        {children}
      </div>
    </>
  );
};

export default Layout;
