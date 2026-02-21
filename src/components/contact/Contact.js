import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';
import ContactView from './ContactView';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_xvkyszx', 'template_8q086nf', formRef.current, 'nvVPere96yAOUYWYv')
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return <ContactView formRef={formRef} handleSubmit={handleSubmit} done={done} darkMode={darkMode} />;
};

export default Contact;