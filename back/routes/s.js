/* const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
// Load Idea Model
const Upload = require('../models/Upload');

// Requete Get
router.get('/', (req, res) => {
	res.send('hello dashboard');
});

// Requete Post
router.post('/', function(req, res, next) {
	console.log(req.body);
	Upload.create(req.body)
		.then(function(data) {
			res.send(data);
		})
		.catch(next);
});
//next permet de passer à la function prochain

module.exports = router;
/* console.log(req.file);
	const upload = new Upload({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name
	});
	upload
		.save()
		.then(result => {
			console.log(result);
			res.status(201).json({ message: 'Created file success' });
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: err });
		});
	console.log(req.body); */ */