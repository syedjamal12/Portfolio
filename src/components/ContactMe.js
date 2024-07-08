// src/ContactMe.js

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';


const ContactMe = () => {
  const contactDetails = {
    name: 'SYED JAMAL AHMED',
    email: 'mdhasnat067@gmail.com',
    phone: '6204199751',
    address: 'Aliah University kolkata, boys hostel 700156',
    linkedIn: 'https://www.linkedin.com/in/syed-jamal-ahmed-73b27618a/',
    github: 'https://github.com/syedjamal12'
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-details">
      <p><strong>Name:</strong> <span style={{ marginLeft: '10px' }}>{contactDetails.name}</span></p>
      <p><FaEnvelope /> <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></p>
        <p><FaPhone /> <a href={`tel:${contactDetails.phone}`}>{contactDetails.phone}</a></p>
        <p><FaMapMarkerAlt /> {contactDetails.address}</p>
        <p><FaLinkedin /> <a href={contactDetails.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        <p><FaGithub /> <a href={contactDetails.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
      </div>
    </div>
  );
};

export default ContactMe;
