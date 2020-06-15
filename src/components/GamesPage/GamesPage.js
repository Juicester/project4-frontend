import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './GamesPage.css';

function GamesPage() {
	const url = 'https://gentle-peak-20229.herokuapp.com/games/';
	const [games, setGames] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setGames(response);
			})
			.catch(console.error);
	}, [url]);

	if (games.length === 0) {
		return <div className='searching'>Gathering Items</div>;
	}

	return (
		<div>
			<h1>Games Page</h1>
			<Container className='container-fluid d-flex justify-content-center'>
				<Row>
					{games &&
						games.map((game) => (
							<Col
								sm={true}
								key={game.game_id}
								className='text-center col-lg-4 col-sm-12 col-md-6'>
								<Card
									style={{ width: '18rem' }}
									key={game.game_id}
									className='categoryCard'>
									<div className='card-body'>
										<h5 className='card-title'>{game.game_id}</h5>
										<h3>
											{game.away_team} @ {game.home_team}
										</h3>
										<Link
											to={`/games/${game.game_id}`}
											className='subcategory item btn stretched-link'>
											{game.game_id}
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

export default GamesPage;
