import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Profil extends Component {
	constructor() {
		super();
		this.state = {
			profile: {
				email: 'homer.simpson@wildcodeschool.fr',
				name: 'Homer',
				lastname: 'Simpson'
			}
		};
	}

	render() {
		return (
			<div>
				<Card>
					<CardBody>
						<CardTitle>email</CardTitle>
						<CardText>{this.state.profile.email}</CardText>
						<CardText>{this.state.profile.name}</CardText>
						<CardText>{this.state.profile.lastname}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default Profil;
