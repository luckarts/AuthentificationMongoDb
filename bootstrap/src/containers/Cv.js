import React from 'react';
import { Container, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Background from '../img/forest2.jpg';
import character from '../img/character.jpg';
import '../css/Cv.scss';
function Profil(props) {
	const { classes } = props;

	return (
		<div>
			<Card className="mains">
				<CardBody>
					<CardImg className="character" src={character} />
					<CardTitle className="title" variant="h6" noWrap>
						Bachelerie Luc
					</CardTitle>
					<CardSubtitle className="subtitle" variant="h6" noWrap>
						Develloppeur Front end Javascript <br />
						Nice / Lyon
					</CardSubtitle>
				</CardBody>
			</Card>
			<div className="resume">
				<Container>
					<Card>
						<CardBody container xs={12} sm={8} className="summary">
							<CardTitle className="h3">Sommaire</CardTitle>
							<CardText className="summary">
								Passionné du numérique , après avoir travailler pendant 3 ans en tant que Graphiste
								2D/3D . J'ai choisi de m'orienté vers le développement web . [Disponible à partir du 4
								février] en tant que développeur web Fullstack Javascript / React avec la méthode Agile
								et Scrum .
							</CardText>
							<Button className="h4">portfolio</Button>
						</CardBody>
					</Card>
				</Container>
			</div>
		</div>
	);
}

export default Profil;
