import Home from '../components/sections/Home/Home';
import NavBar from '../components/sections/Navbar/Navbar';
import React, { Fragment } from 'react';
import AboutThem from '../components/sections/AboutThem/AboutThem';
import FQA from '../components/sections/FQA/FQA';
import About from '../components/sections/About/About';
import Contact from '../components/sections/Contact/Contact';
import Footer from '../components/sections/Footer/Footer';

function Landing() {
  return (
    <Fragment >
      <NavBar />
      <Home />
      <About />
      <AboutThem />
      <FQA />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default Landing;