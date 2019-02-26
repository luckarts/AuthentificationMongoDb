import React, { Component } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Container } from 'reactstrap';
import nature from '../img/study.jpg';
import ConceptStreet from '../img/concept_street_church1.jpg';
import Forest from '../img/forest2.jpg';
import paintingLyly from '../img/painting-lyly.jpg';
import River from '../img/painting_river_mark.jpg';
import Revenant from '../img/revenant.jpg';
import Portrait from '../img/study_color2.jpg';
import Tableau from '../img/tableau.png';
import './Gallery.scss';
const Painting = [
	{
		image: nature,
		cols: 0
	},
	{
		image: ConceptStreet,
		cols: 0
	},

	{
		image: paintingLyly,
		cols: 0
	},
	{
		image: Forest,
		cols: 0
	},
	{
		image: River,
		cols: 0
	},
	{
		image: Revenant
	},
	{
		image: Portrait
	},
	{
		image: Tableau
	}
];
class Imagenes extends Component {
	// componentWillUnmount() {}

	render() {
		return (
			<Container>
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
					<Masonry>
						{Painting.map((e, i) => (
							<div style={{ padding: '7px' }}>
								<img
									key={i}
									src={e.image}
									style={{
										width: '100%',
										display: 'block',
										marginBottom: '5px',
										borderRadius: '10px'
									}}
									alt=""
								/>
							</div>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</Container>
		);
	}
}
export default Imagenes;
