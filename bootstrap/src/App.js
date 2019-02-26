// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Me from './components/Me';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/login" component={Login} />
					<div className="container">
						<Route exact path="/" component={Home} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/me" component={Me} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
