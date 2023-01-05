import React from 'react';
import './Footer.css';
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png'; 
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="Footer">
        <hr />
        <div className="social">
            <img src={github} alt="github" />
            <img src={instagram} alt="instagram" />
            <img src={linkedin} alt="linkedin" />
        </div>
        <div className="footer-img">
            <img src={logo} alt="logo" />
        </div>
    </div>
  );
}

export default Footer;