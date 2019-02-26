import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Me extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: 'homer.simpson@wildcodeschool.fr',
			username: 'Homer'
		};
	}
	onSubmit = event => {
		event.preventDefault();

		fetch('api/user/me', {
			method: 'Get',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify(this.state)
		})
			.then(res => res.json())
			.then(res => this.setState({ errors: res.message }), err => this.setState({ errors: err.message }))
			.then(this.Redirect());
	};
	render() {
		return (
			<div>
				<h3>{this.state.username}</h3>
				<ListGroup>
					<ListGroupItem>{this.state.email}</ListGroupItem>
				</ListGroup>
			</div>
		);
	}
}
export default Me;
