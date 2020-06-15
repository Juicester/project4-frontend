import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import './AnalysisPage.css';
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

function AnalysisPage() {
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
			<h1>Analysis Page</h1>
			<BarChart
				layout='vertical'
				width={550}
				height={1350}
				data={teams}
				margin={{ right: 50, left: 50, top: 30 }}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis type='number' />
				<YAxis type='category' dataKey='team_name' />
				<Tooltip />
				<Legend />
				<Bar dataKey='points_for' fill='#8884d8' />
				{/* <Bar dataKey='uv' fill='#82ca9d' /> */}
			</BarChart>
		</div>
	);
}

export default AnalysisPage;
