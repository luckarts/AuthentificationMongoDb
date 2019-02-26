import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Grid, Typography } from '@material-ui/core';

import Tabs from '@material-ui/core/Tabs';


import Background from '../img/forest2.jpg';
import character from '../img/character.jpg';
import TabsPorfolio from './TabsPorfolio';
import Spotter from './Spotter';
import AppPortfolio from './AppPortfolio';
const numbers = [0, 1, 2];
/* eslint-disable */
const styles = theme => ({
	main: {
		marginBottom: theme.spacing.unit * 10,
		backgroundSize: 'cover',
		height: '90vh',
		width: '100%',
		display: 'flex', // Fix IE 11 issue.
		flexGrow: 1

		//[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {}
	},
	bg: {
		width: '100%',
		height: '100%',
		bottom: 0,
		background: `#000`,
		paddingTop: theme.spacing.unit * 8,
		paddingBottom: theme.spacing.unit * 8
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
		//	padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
	},

	title: {
		paddingTop: theme.spacing.unit * 5,
		paddingBottom: theme.spacing.unit * 5,
		//paddingBottom: theme.spacing.unit * 5,
		textAlign: 'center',
		fontSize: '2em',
		width: '50%',
		color: '#000',
		borderBottom: `1px solid ${theme.palette.grey[500]}`
	},
	character: {
		//	marginRight: theme.spacing.unit * 10,

		width: '100%',
		height: '100%'
	},
	portfolio: { marginTop: theme.spacing.unit * 8 }
});
function TabContainer(props) {
	return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
};
class DetailPortfolio extends Component {
	state = {
		value: 0
		//key: [{ number: 0 }, { number: 1 }, { number: 2 }]
	};

	handleChange = (event, value) => {
		console.log({ value });
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;
		return (
			<Grid>
				<Grid container className={classes.appBar}>
					<TabsPorfolio />
				</Grid>
				<Grid container className={classes.main} justify="center">
					<AppBar className={classes.app}>
						<Tabs value={value} onChange={this.handleChange}>
							<Tab label="Item One" />
							<Tab label="Item Two" />
							<Tab label="Item Three" />
						</Tabs>
					</AppBar>
					{value === 0 && (
						<TabContainer>
							{' '}
							<Spotter />
						</TabContainer>
					)}
					{value === 1 && (
						<TabContainer>
							<AppPortfolio />
						</TabContainer>
					)}
					{value === 2 && (
						<TabContainer>
							<Spotter />
						</TabContainer>
					)}
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(DetailPortfolio);
