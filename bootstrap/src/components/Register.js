// Register.js

import React, { Component } from 'react';

import classnames from 'classnames';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			username: '',
			errors: {}
		};
	}

	handleInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	onSubmit = event => {
		event.preventDefault();

		fetch('api/user/register', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify(this.state)
		})
			.then(res => res.json())
			.then(res => this.setState({ errors: res.message }), err => this.setState({ errors: err.message }))
			.then(this.Redirect());
	};
	Redirect() {
		console.log('redirect');
		this.state.errors.registered === undefined
			? this.setState({ errors: { message: 'errors !!' } })
			: (window.location = '/me');
	}

	/* componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}
 */
	render() {
		return (
			<div className="container" style={{ marginTop: '50px', width: '700px' }}>
				<h2 style={{ marginBottom: '40px' }}>Registration</h2>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input
							className={classnames('form-control form-control-lg', {
								'is-invalid': this.state.errors.username
							})}
							type="text"
							placeholder="username"
							name="username"
							onChange={this.handleInputChange}
							value={this.state.username}
						/>
						{this.state.errors.username && (
							<div className="invalid-feedback">{this.state.errors.username}</div>
						)}
					</div>
					<div className="form-group">
						<input
							className={classnames('form-control form-control-lg', {
								'is-invalid': this.state.errors.email
							})}
							type="email"
							placeholder="Email"
							name="email"
							onChange={this.handleInputChange}
							value={this.state.email}
						/>
						{this.state.errors.email && <div className="invalid-feedback">{this.state.errors.email}</div>}
					</div>
					<div className="form-group">
						<input
							className={classnames('form-control form-control-lg', {
								'is-invalid': this.state.errors.password
							})}
							type="password"
							placeholder="Password"
							name="password"
							onChange={this.handleInputChange}
							value={this.state.password}
						/>
						{this.state.errors.password && (
							<div className="invalid-feedback">{this.state.errors.password}</div>
						)}
					</div>

					<div className="form-group">
						<button type="submit" className="btn btn-primary">
							Register User
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Register;
