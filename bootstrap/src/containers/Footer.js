import React, { Component } from 'react';
import { Container, Col, Row, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import '../css/Portfolio.scss';
/* eslint-disable */

class MediaCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Container>
				<Row>
					<Col lg="12" xs="12">
						<Card>
							<CardBody>
								<CardTitle>Card title</CardTitle>
								<CardSubtitle>Card subtitle</CardSubtitle>
								<CardText>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default MediaCard;
