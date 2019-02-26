const express = require('express');
const router = express.Router();

// Load Idea Model
const Idea = require('../models/Idea');

// Requete Get
router.get('/', (req, res) => {
	res.send('hello dashboard');
});

// Requete Post
router.post('/ideas', function(req, res, next) {
	console.log(req.body);
	Idea.create(req.body)
		.then(function(data) {
			res.send(data);
		})
		.catch(next);
});
//next permet de passer à la function prochain

module.exports = router;
