const express = require('express');
const router = express.Router();
const User = require('../controllers/user');
const passport = require('passport');
// Load Idea Model
//const User = require('../models/user');

// Requete Get

router.get('/', (req, res) => {
	res.send('hello user');
});

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
	res.send(req.user);
});

router.post('/signin', User.auth);
router.post('/register', User.register);
//next permet de passer à la function prochain

module.exports = router;
