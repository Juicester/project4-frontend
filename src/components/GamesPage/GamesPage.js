import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './GamesPage.css';

function nameAdder(teamName) {
	let newID = teamName.substring(46);
	let name = '';
	switch (newID) {
		case '1':
			name = 'San Francisco 49ers';
			break;
		case '2':
			name = 'Chicago Bears';
			break;
		case '3':
			name = 'Cincinnati Bengals';
			break;
		case '4':
			name = 'Buffalo Bills';
			break;
		case '5':
			name = 'Denver Broncos';
			break;
		case '6':
			name = 'Cleveland Browns';
			break;
		case '7':
			name = 'Tampa Bay Buccaneers';
			break;
		case '8':
			name = 'Arizona Cardinals';
			break;
		case '9':
			name = 'Los Angeles Chargers';
			break;
		case '10':
			name = 'Kansas City Chiefs';
			break;
		case '11':
			name = 'Indianapolis Colts';
			break;
		case '12':
			name = 'Dallas Cowboys';
			break;
		case '13':
			name = 'Miami Dolphins';
			break;
		case '14':
			name = 'Philadelphia Eagles';
			break;
		case '15':
			name = 'Atlanta Falcons';
			break;
		case '16':
			name = 'New York Giants';
			break;
		case '17':
			name = 'Jacksonville Jaguars';
			break;
		case '18':
			name = 'New York Jets';
			break;
		case '19':
			name = 'Detroit Lions';
			break;
		case '20':
			name = 'Green Bay Packers';
			break;
		case '21':
			name = 'Carolina Panthers';
			break;
		case '22':
			name = 'New England Patriots';
			break;
		case '23':
			name = 'Oakland Raiders';
			break;
		case '24':
			name = 'Los Angeles Rams';
			break;
		case '25':
			name = 'Baltimore Ravens';
			break;
		case '26':
			name = 'Washington Redskins';
			break;
		case '27':
			name = 'New Orleans Saints';
			break;
		case '28':
			name = 'Seattle Seahawks';
			break;
		case '29':
			name = 'Pittsburgh Steelers';
			break;
		case '30':
			name = 'Houston Texans';
			break;
		case '31':
			name = 'Tennessee Titans';
			break;
		case '32':
			name = 'Minnesota Vikings';
			break;
		default:
			name = '';
	}
	return name;
}

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
		<div className='games-page-container'>
			<h1 className='games-title'>Games</h1>
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
									className='game-card'>
									<div className='card-body'>
										<h5 className='card-title'>
											{nameAdder(game.away_team)} @ {nameAdder(game.home_team)}
										</h5>
										<Link
											to={`/games/${game.game_id}`}
											className='subcategory item btn stretched-link'>
											Game #{game.game_id}
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
