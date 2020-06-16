import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './AddTeam.css';

function AddTeam({ match, history }) {
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

	function handleChange(e) {
		setTeam({ ...team, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch(`${url}`, {
			method: 'POST',
			body: JSON.stringify(team),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((response) => {
				history.push(`/teams/${response.id}`);
			})
			.catch(console.error);
	}

	return (
		<div className='testing'>
			<h1 className='addTitle'>Add A Team</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Team Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='ex. New York Jets'
						name='team_name'
						onChange={handleChange}
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
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Losses</Form.Label>
					<Form.Control
						type='text'
						name='losses'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Ties</Form.Label>
					<Form.Control
						type='text'
						name='ties'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Points For</Form.Label>
					<Form.Control
						type='text'
						name='points_for'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Points Against</Form.Label>
					<Form.Control
						type='text'
						name='points_against'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Rushing TDs</Form.Label>
					<Form.Control
						type='text'
						name='rush_td'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Passing TDs</Form.Label>
					<Form.Control
						type='text'
						name='pass_td'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Total TDs</Form.Label>
					<Form.Control
						type='text'
						name='total_td'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Passing Yards</Form.Label>
					<Form.Control
						type='text'
						name='pass_yards'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Rushing Yards</Form.Label>
					<Form.Control
						type='text'
						name='rush_yards'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Interceptions</Form.Label>
					<Form.Control
						type='text'
						name='int_for'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Forced Fumbles</Form.Label>
					<Form.Control
						type='text'
						name='forced_fumbles'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Fumbles Recovered</Form.Label>
					<Form.Control
						type='text'
						name='fumbles_recovered'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Sacks</Form.Label>
					<Form.Control
						type='text'
						name='sacks'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Fumble TDs</Form.Label>
					<Form.Control
						type='text'
						name='fumble_td'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Interception TDs</Form.Label>
					<Form.Control
						type='text'
						name='int_td'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Safeties</Form.Label>
					<Form.Control
						type='text'
						name='safeties'
						onChange={handleChange}
						className='name-input'
					/>
				</Form.Group>
				<button className='sub-button' type='submit'>
					Add Team
				</button>
			</Form>
		</div>
	);
}
export default AddTeam;
