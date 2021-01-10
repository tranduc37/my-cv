import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar';
import Banner from './components/banner';
import About from './components/about';
import Skills from './components/skills';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Banner />
        <About />
        <Skills />
      </Router>
    </>
  );
}

export default App;
