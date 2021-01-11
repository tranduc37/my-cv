import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar';
import Banner from './components/banner';
import About from './components/about';
import Skills from './components/skills';
import Experiences from './components/experiences';
import Contact from './components/contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Banner />
        <About />
        <Skills />
        <Experiences />
        <Contact />
      </Router>
    </>
  );
}

export default App;
