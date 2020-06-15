import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './TeamsPage.css';

function TeamsPage() {
	const url = 'http://localhost:8000/teams';
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setTeams(response);
			})
			.catch(console.error);
	}, [url]);

	if (teams.length === 0) {
		return <div className='searching'>Gathering Items</div>;
	}

	return (
		<div>
			<h1>Teams Page</h1>
			<Container className='container-fluid d-flex justify-content-center'>
				<Row>
					{teams &&
						teams.map((team) => (
							<Col
								sm={true}
								key={team.id}
								className='text-center col-lg-4 col-sm-12 col-md-6'>
								<Card
									style={{ width: '18rem' }}
									key={team.id}
									className='categoryCard'>
									<div className='card-body'>
										<h5 className='card-title'>{team.team_name}</h5>
										<Link
											to={`/teams/${team.id}`}
											className='subcategory item btn stretched-link'>
											{team.team_name}
										</Link>
									</div>
								</Card>
							</Col>
						))}
				</Row>
			</Container>
		</div>
	);
}

export default TeamsPage;
