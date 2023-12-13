import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../styling/Contact.css';

const Contact = () => {
 
const [show,Setshow] =useState(false);
 
useEffect(() => {
  if (!show) {
    success();
  }
}, [show]); // Add show as a dependency to run the effect when show changes

function success() {
  Setshow(true);
}

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Ensure that the service ID, template ID, and user ID are correct
    emailjs
      .sendForm('service_d7324c8', 'template_bos3kqi', form.current, 'BW9FnL9rHMNPFrD_i')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
   

 
    <div className="Contact" id="Contact">
     <h1 className='ContactHeading'> CONTACT</h1> 
      <form className='custom-form'>
        {/* <form ref={form} onSubmit={sendEmail}> */} 
        <label >Name</label>
        <input type="text" className='Control' id='name' name="user_name" required />
        <label>Email</label>
        <input type="email"  className='Control' name="user_email" id="email"  required />
        <label>Message</label>
        <textarea name="message" className='Control' id="message"  />
        <input type="submit" value="ENVOYER" /> 
        </form>


     </div>
    </>
  );
};
   
export default Contact;                                                               