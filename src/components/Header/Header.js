import React, { Component } from 'react';
import './Header.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
	render() {
		return (
			<div>
				<Navbar className='header-container'>
					<h1>NFL Analysis</h1>
				</Navbar>
			</div>
		);
	}
}

export default Header;
