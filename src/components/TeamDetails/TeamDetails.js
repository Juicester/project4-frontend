import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './TeamDetails.css';

function TeamDetails({ match, location, history }) {
	const url = 'http://localhost:8000/teams/';
	const [team, setTeam] = useState({});

	useEffect(() => {
		fetch(`${url}${match.params.id}`)
			.then((response) => response.json())
			.then((response) => {
				setTeam(response);
			})
			.catch(console.error);
	}, [match.params.id]);

	function handleDelete(e) {
		fetch(`${url}/teams/${match.params.id}`, {
			method: 'DELETE',
		})
			.then(() => {
				history.push('/');
			})
			.catch(console.error);
	}

	if (!team) return null;
	return (
		<div className='itemPage'>
			<Container>
				<Row className='row justify-content-center'>
					<Col className='itemDescription col-md-6 justify-content-center'>
						<img
							src='https://res.cloudinary.com/nflleague/image/private/f_auto/league/ucsdijmddsqcj1i9tddd'
							alt=''
							srcset=''
						/>
						<h3 className='itemTitle'>{team.id}</h3>
						<h1>{team.team_name}</h1>
						<p>
							{team.conference} {team.division}
						</p>
						<p>
							Record: {team.wins}-{team.losses}-{team.ties}
						</p>
						<h3 className='listTitle'>Season Details</h3>
						<ul className='itemList'>
							<li>Points For: {team.points_for}</li>
							<li>Points Against: {team.points_against}</li>
							<li>Rushing TDs: {team.rush_td}</li>
							<li>Passing TDs: {team.pass_td}</li>
							<li>Total TDs: {team.total_td}</li>
							<li>Passing Yards: {team.pass_yards}</li>
							<li>Rushing Yards: {team.rush_yards}</li>
							<li>Interceptions: {team.int_for}</li>
							<li>Forced Fumbles: {team.forced_fumbles}</li>
							<li>Fumbles Recovered: {team.fumbles_recovered}</li>
							<li>Sacks: {team.sacks}</li>
							<li>Fumble TDs: {team.fumble_td}</li>
							<li>Interception TDs: {team.int_td}</li>
							<li>Safeties: {team.safeties}</li>
						</ul>
					</Col>
				</Row>
			</Container>
			<div className='crud-buttons'>
				<Link className='edit-button' to={`/teams/edit/${match.params.id}`}>
					Edit Team
				</Link>
				<button className='delete-button' onClick={handleDelete}>
					Delete Team
				</button>
			</div>
		</div>
	);
}

export default TeamDetails;
