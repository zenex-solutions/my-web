import React from 'react';
import '../styles/home.css'; // Importing the CSS
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing fontawesome icons
import NavBar from '../components/NavBar'; // Import the Home component
import AboutUs from './AboutUs'; // Import the AboutUs component
import Services from './Services'; // Import the AboutUs component
import Projects from './Projects';
import ContactUs from './ContactUs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="div">
    <div className="home-container">
      <NavBar />
      <div className="text-container">
        <p className="class-p">Hi I am</p>
        <h1>Pathum Lakshan</h1>
        <h2>Software</h2>
        <span className="span">Engineer</span>
        <p className="p-class">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        <button className="hire-button">Hire Me</button>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
      <div className="image-container">
        <img src="https://i.imgur.com/4JPQusT.png" alt="Profile" className="profile-image" />  
      </div>

    
    </div>
    <AboutUs/>
    <Services/>
    <Projects/>
    <ContactUs/>
    <Footer/>
    </div>
  );
}
