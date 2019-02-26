import React from 'react';

import CardPortfolio from './Card';
import character from '../img/character.jpg';
import Background from '../img/forest2.jpg';
import Spotter from '../img/Spotter.jpg';
import { Link } from 'react-router-dom';
import { Card, CardBody, Button, Container } from 'reactstrap';
import '../css/Portfolio.scss';
const Projets = [
	{ id: 0, title: 'Wild Circus', image: Spotter },
	{ id: 1, title: 'Spotter', image: Background },
	{ id: 2, title: 'Calypso', image: Background }
];

function Portfolio(props) {
	return (
		<div className="main">
			<Container>
				<h1 className="title">Portfolio</h1>
				<Card  item xs={12} spacing={40} sm={8} justify="center" direction="row">
					{Projets.map(Projets => (
						<CardBody item key={Projets} className="CardBody" lg={12} xs={12}>
							<Link value={Projets.id} key={Projets.toString()} to={'/detailPortfolio'}>
								{/* <img src={character.image} alt={character.name} /> */}
								<CardPortfolio image={Projets.image} />
							</Link>
						</CardBody>
					))}
				</Card>
			</Container>
		</div>
	);
}

export default Portfolio;
