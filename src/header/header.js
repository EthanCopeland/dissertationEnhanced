import React from 'react';
import logo from '../images/logo.png';
import './header.css';

function Navbar() {
	return (
		<header>
			<br/>
            <a id="header-padding" href="/dissertation/enhancedv2"><img src={logo} className="logo" alt="logo"/></a>
			<br/>
		</header>
	)
}

export default Navbar;