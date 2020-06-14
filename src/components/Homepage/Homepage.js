import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Homepage.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function MyModal(props) {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<div className='body-modal'>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						About this Project
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						This is a store for Pathfinder. Pathfinder is a fantasy tabletop
						role playing game. Search our inventory to see information about
						items for your characters
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button className='inside-modal-button' onClick={props.onHide}>
						Close
					</Button>
				</Modal.Footer>
			</div>
		</Modal>
	);
}

function Homepage() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<Container className='container-fluid d-flex justify-content-center'>
			<div className='homepage'>
				<Button
					className='modal-button'
					variant='primary'
					onClick={() => setModalShow(true)}>
					About this App
				</Button>
				<MyModal show={modalShow} onHide={() => setModalShow(false)} />
			</div>
		</Container>
	);
}

export default Homepage;
