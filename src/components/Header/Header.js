import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import bars from '../../assets/bars.png';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='header'>
      <img src={Logo} alt="Logo" className='logo' />
      {menuOpened === false && mobile === true ? <img src={bars} alt="hamburger" style={{ width: '1.5rem', height: '1.5rem', backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px', position: 'fixed', right: '2rem', zIndex: '99' }} onClick={() => setMenuOpened(true)}/> : (
        <ul className='header-menu'>
          <li><Link to='hero' activeClass='active' spy={true} smooth={true} onClick={() => setMenuOpened(false)} >Home</Link></li>
          <li><Link to='programs' spy={true} smooth={true} onClick={() => setMenuOpened(false)} >Programs</Link></li>
          <li><Link to='reasons' spy={true} smooth={true} onClick={() => setMenuOpened(false)} >Why us</Link></li>
          <li><Link to='plans' spy={true} smooth={true} onClick={() => setMenuOpened(false)} >Plans</Link></li>
          <li><Link to='testimonials' spy={true} smooth={true} onClick={() => setMenuOpened(false)} >Testimonials</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Header;