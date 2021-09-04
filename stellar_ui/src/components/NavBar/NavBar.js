import React, { useState } from 'react'
import './NavBar.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const NavBar = () => {
      const [click, setClick] = useState(false);  
      const dispatch = useDispatch();


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Stellar
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            className='nav-item'
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Wishlist
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/ContactUs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <Link to='/' >
            <Button className = "cart-button">Cart</Button>
            </Link>
            <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={() => { dispatch({type: "LOGOUT"});}}
            >
              Log Out
            </Link>
          </li>
          </nav>
    );
}

export default NavBar
