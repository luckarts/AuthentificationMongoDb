//etat global
import React, { Component, createContext } from 'react';
const storeContext = createContext();

class Context extends Component {
	constructor() {
		super();
		this.state = {
			tabs: '1',

			activeTab: this.toggle
		};
	}
	toggle = tab => {
		console.log(tab);
		if (this.state.tabs !== tab) {
			this.setState({
				tabs: tab
			});
		}
	};
	render() {
		return <storeContext.Provider value={this.state}>{this.props.children}</storeContext.Provider>;
	}
}
export default Context;

export const withGame = Component => props => (
	<storeContext.Consumer>{value => <Component {...props} {...value} />}</storeContext.Consumer>
);
