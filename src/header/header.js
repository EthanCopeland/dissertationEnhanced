import React from 'react';
import logo from '../images/logo.png';
import './header.css';

function Navbar() {
	return (
		<header>
            <a href="/dissertation/enhancedv2"><img src={logo} className="logo" alt="logo"/></a>
		</header>
	)
}

export default Navbar;