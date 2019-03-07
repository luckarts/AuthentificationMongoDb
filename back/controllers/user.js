const User = require('../models/user');
const mongooseHelpers = require('../helpers/mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config/dev');
require('../strategy');

exports.auth = function(req, res) {
	const { email, password } = req.body;
	User.findOne({ email }, function(err, user) {
		if (err) {
			return res.status(422).json({ message: normalizeErrors(err.errors) });
		}

		if (!user) {
			return res.status(422).json({ message: { email: 'Invalid User, User does not exist' } });
		}
		if (user.isSamePassword(password)) {
			const payload = {
				id: user.id,
				username: user.username
			};
			jwt.sign(
				payload,
				'secret',
				{
					expiresIn: 3600
				},
				(err, token) => {
					if (err) console.error('There is some error in token', err);
					else {
						res.json({
							message: {
								success: true,
								token: `${token}`
							}
						});
					}
				}
			);
		} else {
			return res.status(422).json({ message: { password: 'Wrong email or password' } });
		}
	});
};
/* export async function signup(req, res) {
  const { email, password, pseudo } = req.body;
  try {
    const user = new User({ email, password });
    const userSaved = await user.save();
    const profile = new Profile({ user: userSaved, email, pseudo });
    const profileSaved = await profile.save();
    res.json({ token: user.getToken(), profile });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'signup failed' });
  }
}
 */
//es.status(200).json({ flash: 'Sign up !' });
exports.register = function(req, res) {
	const { username, email, password } = req.body;

	if (!email) {
		return res.status(422).json({ message: { email: 'Email is required' } });
	}

	if (!password) {
		return res.status(422).json({ message: { password: 'Password is required' } });
	}

	User.findOne({ email }, function(err, existingUser) {
		if (err) {
			return res.status(422).json({ message: 'handle mongoose errors in next lecture' });
		}

		if (existingUser) {
			return res.status(422).json({ message: { email: 'email already exist' } });
		}

		const user = new User({
			username,
			email,
			password
		});

		user.save(function(err) {
			if (err) {
				return res.status(422).json({ message: mongooseHelpers.normalizeErrors(err.errors) });
			}

			return res.send({ message: { registered: true } });
		});
		/* .then(res.redirect('/user'))
			.catch(err => console.log(err)); */
	});
};
exports.authMiddleware = function(req, res, next) {
	const token = req.headers.authorization;

	if (token) {
		const user = parseToken(token);

		User.findById(user.userId, function(err, user) {
			if (err) {
				return res.status(422).json({ message: normalizeErrors(err.errors) });
			}

			if (user) {
				res.locals.user = user;
				next();
			} else {
				return notAuthorized(res);
			}
		});
	} else {
		return notAuthorized(res);
	}
};

function parseToken(token) {
	return jwt.verify(token.split(' ')[1], config.SECRET);
}

function notAuthorized(res) {
	return res.status(401).json({
		message: { login: 'You need to login to get access!' }
	});
}
