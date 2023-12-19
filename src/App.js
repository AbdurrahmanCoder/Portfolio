
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Skills from './Component/Skills';

// import Project from './Component/Project'; 
import Project3 from './Component/Project3';
import Contact from './Component/Contact';
import Project from './Component/Project';
import styles from '../src/styling/styleComp.css'
import '../src/styling/style.css'


function App() {



  useEffect(() => {

    const allAnchorTags = document.querySelectorAll('a, input[type="submit"]');

    // const allAnchorTags = document.querySelectorAll('a');
    const cursorOutline = document.querySelector('.cursor-outline');
    const cursorDot = document.querySelector('.cursor-dot');


    console.log(allAnchorTags);

    allAnchorTags.forEach((anchor) => {
      anchor.addEventListener('mouseover', () => {
        // cursorOutline.style.padding = "40px";
        cursorOutline.classList.add(".biggerCircle");
        cursorDot.style.padding = "2px";
        // cursorDot.style.width = "5px";
        // cursorDot.style.height = "5px";
        // cursorDot.style.height = "2px";


      });

      anchor.addEventListener('mouseout', () => {
        cursorOutline.style.padding = "initial";
        cursorDot.style.padding = "initial";

      });
    });

    return () => {
      allAnchorTags.forEach((anchor) => {
        anchor.removeEventListener('mouseover', () => { });
        anchor.removeEventListener('mouseout', () => {
        // cursorOutline.classList.remove(".biggerCircle");

         });
      });
    };
  }, []);




  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [animationStyle, setAnimationStyle] = useState({});

  // const handleMouseMove = (e) => {
  //   const posX = e.clientX;
  //   const posY = e.clientY;
  //   if (cursorDotRef.current) {
  //     cursorDotRef.current.style.left = `${posX}px`;
  //     cursorDotRef.current.style.top = `${posY}px`; 
  //   }

  //   if (cursorOutlineRef.current) {
  //     cursorOutlineRef.current.style.left = `${posX}px`;
  //     cursorOutlineRef.current.style.top = `${posY}px`;

  //     if (cursorOutlineRef.current) {
  //       setAnimationStyle({
  //         left: `${posX}px`,
  //         top: `${posY}px`,
  //         transition: 'left 0.06s, top 0.06s',
  //       });
  //     }

  //   }


  // };
  const handleMouseMove = (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    if (cursorDotRef.current && cursorOutlineRef.current) {
      requestAnimationFrame(() => {
        cursorDotRef.current.style.left = `${posX}px`;
        cursorDotRef.current.style.top = `${posY}px`;

        cursorOutlineRef.current.style.left = `${posX}px`;
        cursorOutlineRef.current.style.top = `${posY}px`;
      });
    } if (cursorOutlineRef.current) {
      setAnimationStyle({
        left: `${posX}px`,
        top: `${posY}px`,
        transition: 'left 0.10s, top 0.10s',
      });
    }
  };

  return (

    <div className="App" onMouseMove={handleMouseMove}>
      <div className="cursor-dot" ref={cursorDotRef}></div>
      <div className="cursor-outline" ref={cursorOutlineRef} style={animationStyle}></div>
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

