import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/intro.scss';
import Background from '../img/forest2.jpg';
function Intro() {
	return (
		<div className="IntroBg">
			<Container>
				<Row>
					<div className="bannerIntro">
						<h1 className="title">WELCOME INTO MY WORLD</h1>
						<Link to={`/dashboard`}>
							<Button className="ButtonIntro" type="submit">
								Entrer
							</Button>
						</Link>
					</div>
				</Row>
			</Container>
		</div>
	);
}

export default Intro;
