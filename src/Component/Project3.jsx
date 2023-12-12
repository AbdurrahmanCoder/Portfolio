import React, { useEffect } from 'react'; 
import marvel from "../photos/marvel.png";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
 
import styles from '../styling/styleComp.css'
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
duration:duration || 0.7,
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
     duration:duration || 0.7,
     scrollTrigger:{
 trigger:elem,
  start:"top center",
 end:"bottom center"
}
}
)
} 




const slideFrommiddle= (elem,delay,duration) =>
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
     duration:duration || 0.7,
     scrollTrigger:{
 trigger:elem,
  start:"top center",
 end:"bottom center"
}
}
)
} 
const Project3 = () => 
{ 



// to delete 
// useEffect(() => {
//  let ctx =  gsap.context(()=> { 
  
//   const details = gsap.utils.toArray('.desktopContentSection:not(:first-child)');
//   const photos = gsap.utils.toArray('.desktopPhoto:not(:first-child)');
//   const allPhotos = gsap.utils.toArray('.desktopPhoto');

//   gsap.set(photos, { yPercent: 101 });

//   // It's not clear what gsap.matchMedia() does; you might need to import or handle media queries differently.
//   const mm = gsap.matchMedia();

//      details.forEach((detail, index) => {
//       let headline = detail.querySelector('h1');
//       console.log(headline)
//       let animation = gsap.timeline().to(photos[index], { yPercent: 0 })
//         .set(allPhotos[index], { autoAlpha: 0 });
//       ScrollTrigger.create({
//         trigger: headline,
//         start: 'top 80%',
//         end: 'top 50%',
//         animation: animation,
//         // pin:".desktopPhotos",
//         scrub: true,
//         markers: false,
//       });
//     });
 
//   })
//   return () => {
//     ctx.revert();
//     console.log('mobile');
//     // You should destroy or disable any ScrollTrigger instances here to avoid memory leaks.
//     // Example: ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//   };
// }, []);

// to dlelte


useEffect(()=> {
  slideFromLeft(".first",1,2);
 
},[])


useEffect(()=> {
  slideFromright(".second",1,1);
},[])


useEffect(()=> {
  slideFrommiddle(".third",1,1);
},[])

 
return (
    <div className="Project3Main">
      <h1>Portfolio</h1>
     <div className="container"> 
     
      <div className="Project3 first">
        <img src={marvel} alt="" />
        <div>
          <p className="white ">Marvel app</p>
          <p className="white ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit{" "}
          </p>
          <div className="buttons">
            <button>
              {" "}
              <FaExternalLinkSquareAlt className="iconsLink" />
              live
            </button>
            <button>
              {" "}
              <FaGithub className="icons" /> Github
            </button>
          </div>
        </div> 
        
      </div>



      <div className="Project3 second">
        <div>
          <p className="white ">Marvel app</p>
          <p className="white ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
          </p>
          <div className="buttons">
            <button>
              {" "}
              <FaExternalLinkSquareAlt className="iconsLink" />
              live
            </button>
            <button>
              {" "}
              <FaGithub className="icons" /> Github
            </button>
          </div>
        </div>
        <img src={marvel} alt="" />
      </div>
    
      <div className="Project3 third">
        <img src={marvel} alt="" />
        <div>
          <p className="white ">Marvel app</p>
          <p className="white ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit{" "}
          </p>
          <div className="buttons">
            <button>
              {" "}
              <FaExternalLinkSquareAlt className="iconsLink" />
              live
            </button>
            <button>
              {" "}
              <FaGithub className="icons" /> Github
            </button>
          </div>
        </div> 
        
      </div>
 


 
      </div>

      </div> 
  
 
  );
};
export default Project3;
