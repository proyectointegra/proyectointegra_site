import React from 'react';
import Navbar from '../navbar';
import Cover from '../cover';
import Navcircular from '../navcircular';
import Footer from '../footer';

const Layout = ({ title, slogan, children, destination, redirect, image }) => {
  return (
    <>
      <Navbar></Navbar>
      <Cover
        title={title}
        slogan={slogan}
        image={image}
      >
      </Cover>
      {children}
      <Navcircular
        destination={destination}
        redirect={redirect}
      ></Navcircular>
      <Footer></Footer>
    </>
  );
};

export default Layout;