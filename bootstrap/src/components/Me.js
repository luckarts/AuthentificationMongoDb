import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';
class Me extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: [],

		};

	}
componentDidMount(){
console.log(localStorage.getItem('token'))
	const headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };
	axios
	.get('api/user/me', {
		headers,
	})
		.then(res =>this.setState({user: res.data }))

}
	render() {
		return (
			<div>
				<h3>{this.state.user.username}</h3>
				<ListGroup>
					<ListGroupItem>{this.state.user.email}</ListGroupItem>
				</ListGroup>
			</div>
		);
	}
}
export default Me;
