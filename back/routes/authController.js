const User = require('../models/user');
exports.signup = function(req, res) {
	const { email, password } = req.body;
	try {
		const user = new User({ email, password });

		user.save(function(err) {
			if (err) {
				return res.status(422).send({ errors: err });
			}

			return res.json({ registered: true });
		});

		res.json({ token: user.getToken() });
	} catch (e) {
		console.log(e);
		res.status(500).json({ error: 'signup failed' });
	}
};
