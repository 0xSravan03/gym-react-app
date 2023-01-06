import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import bars from '../../assets/bars.png';
import { useState } from 'react';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='header'>
      <img src={Logo} alt="Logo" className='logo' />
      {menuOpened === false && mobile === true ? <img src={bars} alt="hamburger" style={{ width: '1.5rem', height: '1.5rem', backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px' }} onClick={() => setMenuOpened(true)}/> : (
        <ul className='header-menu' onClick={() => setMenuOpened(false)}>
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      )}
    </div>
  );
}

export default Header;