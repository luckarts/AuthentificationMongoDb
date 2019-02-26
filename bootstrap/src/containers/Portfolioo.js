import React from 'react';
import nature from '../img/study.jpg';
import ConceptStreet from '../img/concept_street_church1.jpg';
import Forest from '../img/forest2.jpg';
import paintingLyly from '../img/painting-lyly.jpg';
import River from '../img/painting_river_mark.jpg';
import Revenant from '../img/revenant.jpg';
import Portrait from '../img/study_color2.jpg';
import Tableau from '../img/tableau.png';
import Gallery from './Gallery1';

import './styles.css';
const details = [
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
function Portfolioo() {
	return (
		<div className="App">
			<h1>CodeSandbox</h1>
			<h2>Masonry Grid</h2>

			{/* Set items as childs to create grid */}
			<Gallery itemWidth={330}>
				{details.map(item => {
					return <div>{item.title}</div>;
				})}
			</Gallery>
		</div>
	);
}

export default Portfolioo;
