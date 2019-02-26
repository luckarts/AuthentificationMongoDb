import React, { Component } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Container, Card, CardImg, CardTitle, CardBody } from 'reactstrap';
import './Gallery.scss';
import Axios from 'axios';
class Gallery extends Component {
	constructor() {
		super();
		this.state = { dessertList: [] };
	}
	componentDidMount() {
		this.getDessert();
	}
	getDessert = () => {
		Axios.get('http://localhost:5000/api/dessert/').then(response => {
			this.setState({
				dessertList: response.data
			});
		});
	};
	render() {
		const List = this.state.dessertList;
		return (
			<Container>
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
					<Masonry>
						{List.map((List, i) => (
							<Card style={{ margin: '7px' }}>
								<CardImg
									key={i}
									src={List.image}
									style={{
										width: '100%',
										display: 'block',
										marginBottom: '5px',
										borderRadius: '10px'
									}}
									alt=""
								/>
								<CardBody>
									<CardTitle>{List.titre}</CardTitle>
								</CardBody>
							</Card>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</Container>
		);
	}
}
export default Gallery;
