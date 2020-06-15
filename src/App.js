import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import TeamsPage from './components/TeamsPage/TeamsPage';
import GamesPage from './components/GamesPage/GamesPage';
import AnalysisPage from './components/AnalysisPage/AnalysisPage';

function App(props) {
	return (
		<div className={props.location.pathname === '/' ? 'App bg' : 'App'}>
			<Header />
			<Switch>
				<Route path={`/`} exact={true} component={Homepage} />
				<Route path={`/teams`} exact={true} component={TeamsPage} />
				<Route path={`/games`} exact={true} component={GamesPage} />
				<Route path={`/analysis`} exact={true} component={AnalysisPage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
