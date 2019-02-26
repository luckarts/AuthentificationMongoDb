import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Input, Button } from 'reactstrap';
import '../css/intro.scss';
/* eslint-disable */

class MediaCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Container>
				<Row className="MediaCard">
					<Col lg="12" xs="12">
						<Form>
							<FormGroup className="Follow">
								<Input
									type="text"
									id="exampleCustomFileBrowser"
									name="customFile"
									placeholder="suivre"
								/>
								<Button> Suivre</Button>
							</FormGroup>
						</Form>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default MediaCard;
