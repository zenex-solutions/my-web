import React from 'react';
import '../styles/contact.css';

export default function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1>Lets Design Together</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus 
        netus in. Aliquet donec morbi convallis pretium
      </p>
      <div className="form-container">
        <input 
          type="email" 
          placeholder="Enter Your Email" 
          className="email-input" 
        />
        <button className="contact-button">Contact Me</button>
      </div>
    </div>
  );
}
