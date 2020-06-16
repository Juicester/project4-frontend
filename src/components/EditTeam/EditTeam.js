import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './EditTeam.css';

function EditTeam({ match, history }) {
	const url = 'https://gentle-peak-20229.herokuapp.com/teams';
	const [team, setTeam] = useState({
		team_name: '',
		conference: '',
		division: '',
		wins: '',
		losses: '',
		ties: '',
		points_for: '',
		points_against: '',
		rush_td: '',
		pass_td: '',
		total_td: '',
		pass_yards: '',
		rush_yards: '',
		int_for: '12',
		forced_fumbles: '12',
		fumbles_recovered: '8',
		sacks: '23',
		fumble_td: '23',
		int_td: '23',
		safeties: '23',
	});

	useEffect(() => {
		fetch(`${url}/${match.params.id}`)
			.then((response) => response.json())
			.then((response) => {
				setTeam(response);
			})
			.catch(console.error);
	}, [match.params.id]);

	function handleChange(e) {
		setTeam({ ...team, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch(`${url}/${match.params.id}`, {
			method: 'PUT',
			body: JSON.stringify(team),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				history.push(`/teams/${match.params.id}`);
			})
			.catch(console.error);
	}

	return (
		<div className='testing'>
			<h1 className='edit-title'>Edit A Team</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Team Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='ex. New York Jets'
						name='team_name'
						onChange={handleChange}
						value={team.team_name}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Conference</Form.Label>
					<Form.Control
						type='text'
						placeholder='ex. AFC'
						name='conference'
						onChange={handleChange}
						value={team.conference}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Division</Form.Label>
					<Form.Control
						type='text'
						placeholder='ex. East'
						name='division'
						onChange={handleChange}
						value={team.division}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Wins</Form.Label>
					<Form.Control
						type='text'
						placeholder='ex. 7'
						name='wins'
						onChange={handleChange}
						value={team.wins}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Losses</Form.Label>
					<Form.Control
						type='text'
						name='losses'
						onChange={handleChange}
						value={team.losses}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Ties</Form.Label>
					<Form.Control
						type='text'
						name='ties'
						onChange={handleChange}
						value={team.ties}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Points For</Form.Label>
					<Form.Control
						type='text'
						name='points_for'
						onChange={handleChange}
						value={team.points_for}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Points Against</Form.Label>
					<Form.Control
						type='text'
						name='points_against'
						onChange={handleChange}
						value={team.points_against}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Rushing TDs</Form.Label>
					<Form.Control
						type='text'
						name='rush_td'
						onChange={handleChange}
						value={team.rush_td}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Passing TDs</Form.Label>
					<Form.Control
						type='text'
						name='pass_td'
						onChange={handleChange}
						value={team.pass_td}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Total TDs</Form.Label>
					<Form.Control
						type='text'
						name='total_td'
						onChange={handleChange}
						value={team.total_td}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Passing Yards</Form.Label>
					<Form.Control
						type='text'
						name='pass_yards'
						onChange={handleChange}
						value={team.pass_yards}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Rushing Yards</Form.Label>
					<Form.Control
						type='text'
						name='rush_yards'
						onChange={handleChange}
						value={team.rush_yards}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Interceptions</Form.Label>
					<Form.Control
						type='text'
						name='int_for'
						onChange={handleChange}
						value={team.int_for}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Forced Fumbles</Form.Label>
					<Form.Control
						type='text'
						name='forced_fumbles'
						onChange={handleChange}
						value={team.forced_fumbles}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Fumbles Recovered</Form.Label>
					<Form.Control
						type='text'
						name='fumbles_recovered'
						onChange={handleChange}
						value={team.fumbles_recovered}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Sacks</Form.Label>
					<Form.Control
						type='text'
						name='sacks'
						onChange={handleChange}
						value={team.sacks}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Fumble TDs</Form.Label>
					<Form.Control
						type='text'
						name='fumble_td'
						onChange={handleChange}
						value={team.fumble_td}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Interception TDs</Form.Label>
					<Form.Control
						type='text'
						name='int_td'
						onChange={handleChange}
						value={team.int_td}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Safeties</Form.Label>
					<Form.Control
						type='text'
						name='safeties'
						onChange={handleChange}
						value={team.safeties}
						className='name-input'
					/>
				</Form.Group>
				<button className='sub-button' type='submit'>
					Edit Team
				</button>
			</Form>
		</div>
	);
}
export default EditTeam;
