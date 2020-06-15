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
				<Route
					path={`/analysis/wins`}
					exact={true}
					render={() => <AnalysisPage analysisString={'wins'} />}
				/>
				<Route
					path={`/analysis/losses`}
					exact={true}
					render={() => <AnalysisPage analysisString={'losses'} />}
				/>
				<Route
					path={`/analysis/points_for`}
					exact={true}
					render={() => <AnalysisPage analysisString={'points_for'} />}
				/>
				<Route
					path={`/analysis/points_against`}
					exact={true}
					render={() => <AnalysisPage analysisString={'points_against'} />}
				/>
				<Route
					path={`/analysis/rush_td`}
					exact={true}
					render={() => <AnalysisPage analysisString={'rush_td'} />}
				/>
				<Route
					path={`/analysis/pass_td`}
					exact={true}
					render={() => <AnalysisPage analysisString={'pass_td'} />}
				/>
				<Route
					path={`/analysis/total_td`}
					exact={true}
					render={() => <AnalysisPage analysisString={'total_td'} />}
				/>
				<Route
					path={`/analysis/pass_yards`}
					exact={true}
					render={() => <AnalysisPage analysisString={'pass_yards'} />}
				/>
				<Route
					path={`/analysis/rush_yards`}
					exact={true}
					render={() => <AnalysisPage analysisString={'rush_yards'} />}
				/>
				<Route
					path={`/analysis/int_for`}
					exact={true}
					render={() => <AnalysisPage analysisString={'int_for'} />}
				/>
				<Route
					path={`/analysis/forced_fumbles`}
					exact={true}
					render={() => <AnalysisPage analysisString={'forced_fumbles'} />}
				/>
				<Route
					path={`/analysis/fumbles_recovered`}
					exact={true}
					render={() => <AnalysisPage analysisString={'fumbles_recovered'} />}
				/>
				<Route
					path={`/analysis/sacks`}
					exact={true}
					render={() => <AnalysisPage analysisString={'sacks'} />}
				/>
				<Route
					path={`/analysis/fumble_td`}
					exact={true}
					render={() => <AnalysisPage analysisString={'fumble_td'} />}
				/>
				<Route
					path={`/analysis/int_td`}
					exact={true}
					render={() => <AnalysisPage analysisString={'int_td'} />}
				/>
				<Route
					path={`/analysis/safeties`}
					exact={true}
					render={() => <AnalysisPage analysisString={'safeties'} />}
				/>
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
			{/* <Footer /> */}
		</div>
	);
}

export default App;
