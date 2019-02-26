import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { withGame } from '../Providers/StoreProviders';
class Result extends Component {
	constructor(props) {
		super(props);
		/* setInterval(() => {
			this.count++;
			this.props.updateRandomCall();
		}, 1000); */
		console.log(this.props);
	}

	render() {
		return (
			<div>
				{this.props.housesList}
				<Button color="danger">Danger!</Button>
			</div>
		);
	}
}

export default withGame(Result);
