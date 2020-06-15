import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import TeamsPage from './components/TeamsPage/TeamsPage';
import GamesPage from './components/GamesPage/GamesPage';
import AnalysisPage from './components/AnalysisPage/AnalysisPage';
import TeamDetails from './components/TeamDetails/TeamDetails';
import GameDetails from './components/GameDetails/GameDetails';

function App(props) {
	return (
		<div className={props.location.pathname === '/' ? 'App bg' : 'App'}>
			<Header />
			<Switch>
				<Route path={`/`} exact={true} component={Homepage} />
				<Route path={`/teams`} exact={true} component={TeamsPage} />
				<Route path={`/games`} exact={true} component={GamesPage} />
				<Route path={`/analysis`} exact={true} component={AnalysisPage} />
				<Route
					path={'/teams/:id'}
					exact={true}
					render={(props) => (
						<TeamDetails
							match={props.match}
							location={props.location}
							history={props.history}
						/>
					)}
				/>
				<Route
					path={'/games/:id'}
					exact={true}
					render={(props) => (
						<GameDetails
							match={props.match}
							location={props.location}
							history={props.history}
						/>
					)}
				/>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
