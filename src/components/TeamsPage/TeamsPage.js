import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './TeamsPage.css';
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
		case 'New York Jets':
			img = Jets;
			break;
		case 'San Francisco 49ers':
			img = SF;
			break;
		case 'Chicago Bears':
			img = Bears;
			break;
		case 'Cincinnati Bengals':
			img = Bengals;
			break;
		case 'Buffalo Bills':
			img = Bills;
			break;
		case 'Denver Broncos':
			img = Broncos;
			break;
		case 'Cleveland Browns':
			img = Browns;
			break;
		case 'Tampa Bay Buccaneers':
			img = Buccs;
			break;
		case 'Arizona Cardinals':
			img = Cardinals;
			break;
		case 'Los Angeles Chargers':
			img = Chargers;
			break;
		case 'Kansas City Chiefs':
			img = Chiefs;
			break;
		case 'Indianapolis Colts':
			img = Colts;
			break;
		case 'Dallas Cowboys':
			img = Cowboys;
			break;
		case 'Miami Dolphins':
			img = Dolphins;
			break;
		case 'Philadelphia Eagles':
			img = Eagles;
			break;
		case 'Atlanta Falcons':
			img = Falcons;
			break;
		case 'New York Giants':
			img = Giants;
			break;
		case 'Jacksonville Jaguars':
			img = Jaguars;
			break;
		case 'Detroit Lions':
			img = Lions;
			break;
		case 'Green Bay Packers':
			img = Packers;
			break;
		case 'Carolina Panthers':
			img = Panthers;
			break;
		case 'New England Patriots':
			img = Patriots;
			break;
		case 'Oakland Raiders':
			img = Raiders;
			break;
		case 'Los Angeles Rams':
			img = Rams;
			break;
		case 'Baltimore Ravens':
			img = Ravens;
			break;
		case 'Washington Redskins':
			img = Skins;
			break;
		case 'New Orleans Saints':
			img = Saints;
			break;
		case 'Seattle Seahawks':
			img = Seahawks;
			break;
		case 'Pittsburgh Steelers':
			img = Steelers;
			break;
		case 'Houston Texans':
			img = Texans;
			break;
		case 'Tennessee Titans':
			img = Titans;
			break;
		case 'Minnesota Vikings':
			img = Vikings;
			break;
		default:
			img = '';
	}
	return img;
}

function TeamsPage() {
	const url = 'https://gentle-peak-20229.herokuapp.com/teams';
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
		<div className='team-page-container'>
			<h1 className='team-title'>Teams Page</h1>
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
									className='team-card'>
									<div className='card-body'>
										<Link
											to={`/teams/${team.id}`}
											className='subcategory item btn stretched-link'>
											<Card.Img variant='top' src={imgAdder(team.team_name)} />
											<h5 className='card-title'>{team.team_name}</h5>
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
