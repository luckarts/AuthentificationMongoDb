/* eslint-disable */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import '../css/SignUp.scss';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			cpassword: '',
			redirect: false
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	render() {
		const { pseudo, email, password, cpassword } = this.state;
		const { redirect } = this.state;
		if (redirect) {
			return <Redirect to="/CreateProfile" />;
		}
		return (
			<div className="Sign">
				<Form
					onSubmit={handleSubmit(value => {
						dubugger;
					})}
				>
					<legend>Inscription</legend>
					<FormGroup controlId="pseudo">
						<ControlLabel>Pseudo</ControlLabel>
						<FormControl autoFocus type="pseudo" value={pseudo} onChange={this.handleChange} />
					</FormGroup>
					<FormGroup controlId="email">
						<ControlLabel>E-mail</ControlLabel>
						<FormControl
							autoFocus
							type="email"
							value={email}
							onChange={this.handleChange}
							placeholder="mon-email@gmail.com"
						/>
					</FormGroup>
					<FormGroup controlId="password">
						<ControlLabel>Mot de passe</ControlLabel>
						<FormControl
							value={password}
							onChange={this.handleChange}
							type="password"
							placeholder="*******"
						/>
					</FormGroup>
					<FormGroup controlId="cpassword">
						<ControlLabel>Confirmation</ControlLabel>
						<FormControl
							value={cpassword}
							onChange={this.handleChange}
							type="password"
							placeholder="*******"
						/>
					</FormGroup>
					<Link to={`/Profil`}>
						<Button onClick={this.send} block type="submit">
							Inscription
						</Button>
					</Link>
				</Form>
			</div>
		);
	}
}

export default Signup;
