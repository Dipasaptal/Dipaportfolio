import React from 'react';
import About from '../pages/About';
import Project from '../pages/Project';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

const HomeSections = () => {
  return (
    <>
      <section id="about" className="py-12 px-6">
        <About />
      </section>
      <section id="projects" className="py-12 px-6">
        <Project />
      </section>
     <section id="resume" className="px-6">
        <Resume />
      </section>
       <section id="contact" className="px-6">
        <Contact />
      </section>
    </>
  );
};

export default HomeSections;
