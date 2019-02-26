/* exports.auth = function(req, res) {
	const { email, password } = req.body;

	User.findOne({ email }, function(err, user) {
		if (err) {
			return res.status(422).send({ errors: normalizeErrors(err.errors) });
		}

		if (!user) {
			return res.status(422).send({ errors: [{ title: 'Invalid User!', detail: 'User does not exist' }] });
		}
		if (user.hasSamePassword(password)) {
			const token = jwt.sign({ userId: user.id, username: user.username }, config.SECRET, { expiresIn: '1h' });

			return res.json(token);
		} else {
			return res.status(422).send({ errors: [{ title: 'Wrong Data!', detail: 'Wrong email or password' }] });
		}
	});

}; */