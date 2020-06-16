import React, { Component } from 'react';
import './Header.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/NFLLogo.png';

class Header extends Component {
	render() {
		return (
			<header>
				<Navbar className='header-container'>
					<Navbar.Brand>
						<Link to='/'>
							<img className='header-logo' src={Logo} alt='' />
						</Link>
					</Navbar.Brand>
					<h1>NFL Analysis</h1>
					<DropdownButton
						alignRight
						id='dropdown-basic-button'
						title='Shortcuts'>
						<Link className='dropdown-item' to={`/teams`}>
							Teams
						</Link>
						<Link className='dropdown-item' to={`/games`}>
							Games
						</Link>
						<Link className='dropdown-item' to={`/analysis/Wins`}>
							Analysis
						</Link>
					</DropdownButton>
				</Navbar>
			</header>
		);
	}
}

export default Header;
