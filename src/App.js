import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route path={`/`} exact={true} component={Homepage} />
			</Switch>
			<h1>Hello World</h1>
			<Footer />
		</div>
	);
}

export default App;
