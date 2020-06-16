import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Homepage.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Teams from '../../images/NFLLogo.png';
import Games from '../../images/Football.png';
import Analysis from '../../images/Analysis.png';

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
						This is an app for GA. It has a database that has NFL teams, NFL
						Games and their statistics. Click one of the cards to see!
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
				<Link className='add-button' to={`/addteam`}>
					Add a Team
				</Link>
				<MyModal show={modalShow} onHide={() => setModalShow(false)} />
				<Row>
					<Col>
						<Card className='home-cards'>
							<Link to='/teams' className='item btn stretched-link'>
								<Card.Title>Teams</Card.Title>
								<Card.Img variant='bottom' src={Teams} />
							</Link>
						</Card>
					</Col>
					<Col>
						<Card className='home-cards'>
							<Link to='/games' className='item btn stretched-link'>
								<Card.Title>Games</Card.Title>
								<Card.Img variant='bottom' src={Games} />
							</Link>
						</Card>
					</Col>
					<Col>
						<Card className='home-cards'>
							<Link to='/analysis/wins' className='item btn stretched-link'>
								<Card.Title>Analysis</Card.Title>
								<Card.Img variant='bottom' src={Analysis} />
							</Link>
						</Card>
					</Col>
				</Row>
			</div>
		</Container>
	);
}

export default Homepage;
