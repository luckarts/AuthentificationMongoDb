import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { withGame } from '../Context/Context';
import '../css/Navbar.scss';
class Navbars extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true
		};
	}
	toggleNavbar = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};
	render() {
		return (
			<div>
				<Navbar color="light" light expand="lg">
					<NavbarBrand inline href="/">
						<h1>Recettes</h1>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav className="navbars" navbar>
							<NavItem>
								<NavLink href="/components/">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/components/">Add a recibe</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/components/">View all</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
export default withGame(Navbars);
