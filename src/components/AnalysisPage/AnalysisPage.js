import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './AnalysisPage.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Label,
} from 'recharts';

function AnalysisPage(props) {
	const { analysisString } = props;
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
		<div>
			<h1>Analysis Page</h1>
			<BarChart
				layout='vertical'
				width={750}
				height={1350}
				data={teams}
				margin={{ right: 50, left: 50, top: 30 }}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis type='number' />
				<YAxis type='category' dataKey='team_name' />
				<Tooltip />
				<Legend />
				<Bar dataKey={analysisString} fill='#8884d8' />
				{/* <Bar dataKey='uv' fill='#82ca9d' /> */}
			</BarChart>
			<DropdownButton
				// alignRight
				id='dropdown-basic-button'
				title='Analysis Categories'>
				<Link className='dropdown-item' to={`/analysis/wins`}>
					Wins
				</Link>
				<Link className='dropdown-item' to={`/analysis/losses`}>
					Losses
				</Link>
				<Link className='dropdown-item' to={`/analysis/points_for`}>
					Points For
				</Link>
				<Link className='dropdown-item' to={`/analysis/points_against`}>
					Points Against
				</Link>
				<Link className='dropdown-item' to={`/analysis/rush_td`}>
					Rushing TDs
				</Link>
				<Link className='dropdown-item' to={`/analysis/pass_td`}>
					Passing TDs
				</Link>
				<Link className='dropdown-item' to={`/analysis/total_td`}>
					Total TDs
				</Link>
				<Link className='dropdown-item' to={`/analysis/pass_yards`}>
					Passing Yards
				</Link>
				<Link className='dropdown-item' to={`/analysis/rush_yards`}>
					Rushing Yards
				</Link>
				<Link className='dropdown-item' to={`/analysis/int_for`}>
					Interceptions
				</Link>
				<Link className='dropdown-item' to={`/analysis/forced_fumbles`}>
					Forced Fumbles
				</Link>
				<Link className='dropdown-item' to={`/analysis/fumbles_recovered`}>
					Fumbles Recovered
				</Link>
				<Link className='dropdown-item' to={`/analysis/sacks`}>
					Sacks
				</Link>
				<Link className='dropdown-item' to={`/analysis/fumble_td`}>
					Fumble TDs
				</Link>
				<Link className='dropdown-item' to={`/analysis/int_td`}>
					Interception TDs
				</Link>
				<Link className='dropdown-item' to={`/analysis/safeties`}>
					Safeties
				</Link>
			</DropdownButton>
		</div>
	);
}

export default AnalysisPage;
