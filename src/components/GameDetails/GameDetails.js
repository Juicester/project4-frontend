import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './GameDetails.css';

function GameDetails({ match, location, history }) {
	const url = 'http://localhost:8000/games/';
	const [game, setGame] = useState({});

	useEffect(() => {
		fetch(`${url}${match.params.id}`)
			.then((response) => response.json())
			.then((response) => {
				setGame(response);
			})
			.catch(console.error);
	}, [match.params.id]);

	if (!game) return null;

	return (
		<div className='itemPage'>
			<Container>
				<Row className='row justify-content-center'>
					<Col className='itemDescription col-md-6 justify-content-center'>
						<h3 className='itemTitle'>{game.game_id}</h3>
						<h1>
							{game.away_team} @ {game.home_team}
						</h1>
						<p className='itemParagraph'>{game.week}</p>
						<p>{game.day}</p>
						<h3 className='listTitle'>Game Details</h3>
						<ul className='itemList'>
							<li>Home Spread: {game.home_spread}</li>
							<li>Over/Under: {game.over_under}</li>
							<h3>
								Final Score: {game.away_team} {game.away_score} @{' '}
								{game.home_score} {game.home_team}
							</h3>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default GameDetails;
