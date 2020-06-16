import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import './TeamDetails.css';
import Jets from '../../images/JetsLogo.png';
import SF from '../../images/49ersLogo.png';
import Bears from '../../images/BearsLogo.png';
import Bengals from '../../images/Bengals Logo.png';
import Bills from '../../images/BillsLogo.png';
import Broncos from '../../images/BroncosLogo.png';
import Browns from '../../images/BrownsLogo.png';
import Buccs from '../../images/BuccsLogo.png';
import Cardinals from '../../images/CardinalsLogo.png';
import Chargers from '../../images/ChargersLogo.png';
import Chiefs from '../../images/ChiefsLogo.png';
import Colts from '../../images/ColtsLogo.png';
import Cowboys from '../../images/CowboysLogo.png';
import Dolphins from '../../images/DolphinsLogo.png';
import Eagles from '../../images/EaglesLogo.png';
import Falcons from '../../images/FalconsLogo.png';
import Giants from '../../images/GiantsLogo.png';
import Jaguars from '../../images/JaguarsLogo.png';
import Lions from '../../images/LionsLogo.png';
import Packers from '../../images/PackersLogo.png';
import Panthers from '../../images/PanthersLogo.png';
import Patriots from '../../images/PatriotsLogo.png';
import Raiders from '../../images/RaidersLogo.png';
import Rams from '../../images/RamsLogo.png';
import Ravens from '../../images/RavensLogo.png';
import Skins from '../../images/SkinsLogo.png';
import Saints from '../../images/SaintsLogo.png';
import Seahawks from '../../images/SeahawksLogo.png';
import Steelers from '../../images/SteelersLogo.png';
import Texans from '../../images/TexansLogo.png';
import Titans from '../../images/TitansLogo.png';
import Vikings from '../../images/VikingsLogo.png';

function imgAdder(teamName) {
	let img;
	switch (teamName) {
		case 1:
			img = SF;
			break;
		case 2:
			img = Bears;
			break;
		case 3:
			img = Bengals;
			break;
		case 4:
			img = Bills;
			break;
		case 5:
			img = Broncos;
			break;
		case 6:
			img = Browns;
			break;
		case 7:
			img = Buccs;
			break;
		case 8:
			img = Cardinals;
			break;
		case 9:
			img = Chargers;
			break;
		case 10:
			img = Chiefs;
			break;
		case 11:
			img = Colts;
			break;
		case 12:
			img = Cowboys;
			break;
		case 13:
			img = Dolphins;
			break;
		case 14:
			img = Eagles;
			break;
		case 15:
			img = Falcons;
			break;
		case 16:
			img = Giants;
			break;
		case 17:
			img = Jaguars;
			break;
		case 18:
			img = Jets;
			break;
		case 19:
			img = Lions;
			break;
		case 20:
			img = Packers;
			break;
		case 21:
			img = Panthers;
			break;
		case 22:
			img = Patriots;
			break;
		case 23:
			img = Raiders;
			break;
		case 24:
			img = Rams;
			break;
		case 25:
			img = Ravens;
			break;
		case 26:
			img = Skins;
			break;
		case 27:
			img = Saints;
			break;
		case 28:
			img = Seahawks;
			break;
		case 29:
			img = Steelers;
			break;
		case 30:
			img = Texans;
			break;
		case 31:
			img = Titans;
			break;
		case 32:
			img = Vikings;
			break;
		default:
			img = '';
	}
	return img;
}

function TeamDetails({ match, location, history }) {
	const url = 'https://gentle-peak-20229.herokuapp.com/teams/';
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
			<Header />
			<Container>
				<Row className='row justify-content-center'>
					<Col className='itemDescription col-md-6 justify-content-center'>
						<img
							className='logo-img'
							src={imgAdder(team.id)}
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
							<li className='odd'>Points For: {team.points_for}</li>
							<li className='even'>Points Against: {team.points_against}</li>
							<li className='odd'>Rushing TDs: {team.rush_td}</li>
							<li className='even'>Passing TDs: {team.pass_td}</li>
							<li className='odd'>Total TDs: {team.total_td}</li>
							<li className='even'>Passing Yards: {team.pass_yards}</li>
							<li className='odd'>Rushing Yards: {team.rush_yards}</li>
							<li className='even'>Interceptions: {team.int_for}</li>
							<li className='odd'>Forced Fumbles: {team.forced_fumbles}</li>
							<li className='even'>
								Fumbles Recovered: {team.fumbles_recovered}
							</li>
							<li className='odd'>Sacks: {team.sacks}</li>
							<li className='even'>Fumble TDs: {team.fumble_td}</li>
							<li className='odd'>Interception TDs: {team.int_td}</li>
							<li className='even'>Safeties: {team.safeties}</li>
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
