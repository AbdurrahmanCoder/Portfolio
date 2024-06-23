import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../styling/Contact.css';

const Contact = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) { 
      const timeoutId = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [show]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_d7324c8', 'template_bos3kqi', form.current, 'Oq2q7Xbg3Sxq6GRVz')  
      .then(
        (result) => {
          console.log(result.text); 
          setShow(true);
          form.current.reset();  
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
        <form className='custom-form' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" className='Control' id='name' name="user_name" required />
          <label>Email</label>
          <input type="email" className='Control' name="user_email" id="email" required />
          <label>Message</label>
          <textarea name="message" className='Control' id="message" />
          <input type="submit" value="ENVOYER" id='Submit' />
        </form>
        {show && (
          <div className="message-container">
            <p className="message">Message Sent!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
