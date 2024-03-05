import React, { useState } from 'react';
import Logo from '../assets/jvadds.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "../styles/Navbar.css";

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className='hiddenLinks'>
        <Link to="/"> Welcome </Link>
        <Link to="/about"> About </Link>
        <Link to="/services"> Services </Link>
        <Link to="/tech"> Our Technology </Link>
        <Link to="/resources"> Patient Resources </Link>
        <Link to="/contact"> Contact Us </Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/"> Welcome </Link>
        <Link to="/about"> About </Link>
        <Link to="/services"> Services </Link>
        <Link to="/tech"> Our Technology </Link>
        <Link to="/resources"> Patient Resources </Link>
        <Link to="/contact"> Contact Us </Link>
        <button onClick={toggleNavbar}>
            <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
