import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import './GameDetails.css';

function nameAdder(teamName) {
	let newID = teamName.substring(46);
	console.log(newID);
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

function GameDetails({ match, location, history }) {
	const url = 'https://gentle-peak-20229.herokuapp.com/games/';
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
			<Header />
			<Container>
				<Row className='row justify-content-center'>
					<Col className='itemDescription col-md-6 justify-content-center'>
						<h3 className='itemTitle'>
							{game.away_team} @ {game.home_team}
						</h3>
						<h3>Game #{game.game_id}</h3>
						<h3 className='listTitle'>Game Details</h3>
						<ul className='itemList'>
							<li className='odd'>Week: {game.week}</li>
							<li className='even'>{game.day}</li>
							<li className='odd'>Home Spread: {game.home_spread}</li>
							<li className='even'>Over/Under: {game.over_under}</li>
							<li className='odd'>
								Final Score: {game.away_score} @ {game.home_score}
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default GameDetails;
