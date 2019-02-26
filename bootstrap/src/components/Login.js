// Login.js

import React, { Component } from 'react';

import classnames from 'classnames';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
		};
	}

	handleInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit(e) {
		e.preventDefault();
		const user = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.loginUser(user);
	}
	onSubmit = event => {
		event.preventDefault();

		fetch('api/user/signin', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify(this.state)
		})
			.then(res => res.json())
			.then(res => this.setState({ errors: res.message }), err => this.setState({ errors: err.message }))
			.then(this.Redirect());
	};
	Redirect() {
		this.state.errors.success === undefined
			? this.setState({ errors: { message: 'errors !!' } })
			: (window.location = '/me');
	}
	render() {
		const { errors } = this.state;
		return (
			<div className="container" style={{ marginTop: '50px', width: '700px' }}>
				<h2 style={{ marginBottom: '40px' }}>Login</h2>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input
							type="email"
							placeholder="email"
							className={classnames('form-control form-control-lg', {
								'is-invalid': errors.email
							})}
							name="email"
							onChange={this.handleInputChange}
							value={this.state.email}
						/>
						{errors.email && <div className="invalid-feedback">{errors.email}</div>}
					</div>
					<div className="form-group">
						<input
							type="password"
							placeholder="Password"
							className={classnames('form-control form-control-lg', {
								'is-invalid': errors.password
							})}
							name="password"
							onChange={this.handleInputChange}
							value={this.state.password}
						/>
						{errors.password && <div className="invalid-feedback">{errors.password}</div>}
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">
							Login User
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
