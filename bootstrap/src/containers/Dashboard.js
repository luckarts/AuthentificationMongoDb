import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from './Navbar';
import Tabs from './Tabs';
import Context from '../Context/Context';
function Dashboard() {
	return (
		<Context>
			<div>
				<Navbar />
				<Tabs />
			</div>
		</Context>
	);
}

export default Dashboard;
