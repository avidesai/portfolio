import React from 'react';
import Header from '../components/Header/Header';
import Introduction from '../components/Introduction/Introduction';
import Project from '../components/Project/Project';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <Project />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
