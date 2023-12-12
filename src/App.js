
import React from 'react';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Skills from './Component/Skills';
 
// import Project from './Component/Project'; 
import Project3 from './Component/Project3';
import Contact from './Component/Contact';
import Project from './Component/Project';
import styles from '../src/styling/styleComp.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills /> 
      {/* <Project3/>     */}
      <Project /> 
      <Contact /> /
    </div>
  );
}

export default App;

