import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<div>
				<Navbar fixed='bottom' className='footer'>
					<p>This is the footer</p>
				</Navbar>
			</div>
		);
	}
}

export default Footer;
