import React from 'react';
import  './animation.js'
import '../styling/styleComp.css' 
import undraw from "../../src/photos/undraw.svg"
import { useEffect, useRef, useState } from "react"; 
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";  
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin) 
 
const slideFromLeft = (elem,delay,duration) =>
{ 
   gsap.fromTo(elem,
   {
     opacity:0,
     x:-400,
   },
   {
     opacity:1,
     x:0,
     delay:delay || 0.5,
     duration:duration || 0.5,
     scrollTrigger:{
 trigger:elem,
 start:"top center",
 end:"bottom center"
}
}
)
}


const slideFromright = (elem,delay,duration) =>
{ 
   gsap.fromTo(elem,
   {
     opacity:0,
     x:400,
   },
   {
     opacity:1,
     x:0,
     delay:delay || 0.5,
     duration:duration || 0.5,
     scrollTrigger:{
 trigger:elem,
 start:"top center",
 end:"bottom center"
}
}
)
} 
const Home = () =>{ 
  useEffect(()=> {
    slideFromLeft(".Home");
  },[".Home"])
  

  useEffect(()=> {
    slideFromright(".HeroImg");
  },[])
  


return(
    <> 

<div className="container" id='Home'>
<div className='HomeMain' >   
<div className="Home">
<h6 className='H6hello' >Salut,je m'appelle</h6>
{/* <h1 >Hi, I'm Abdur Rahman</h1> */}
<h1 className='H1name' >  Abdur Rahman</h1>
<h2 className='H2work'>Je suis developpeur full stack</h2>
{/* <h2 >I am a front end developer.</h2> */}
<div className='icons'> 
<SiGmail className='BsGithub'   size={"50px"}/>
<BsGithub className='BsGithub'   size={"50px"}/> 
<BsLinkedin className='BsGithub'   size={"50px"}/> 
</div>
</div>
<img className='HeroImg'  src={undraw} alt="" />
{/* 
<img style={ { width: "40%",
  height: "300px",marginTop:"100px"}} src={imgHero} alt="" /> */}

   </div>
 
 </div>
</>
)
 }
 export default Home;