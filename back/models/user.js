const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UsersSchema = new Schema({
	username: {
		type: String,
		min: [4, 'too short , min is 4 characters'],
		max: [32, 'too short , max 32 characters']
	},
	email: {
		type: String,
		min: [4, 'too short , min is 4 characters'],
		max: [32, 'too short , max 32 characters'],
		unique: true,
		lowercase: true,
		require: 'email is require'
	},
	password: {
		type: String,
		require: 'Password is require'
	}
});
// Store hash in your password DB.
//Salt is a require for hashing pasword security

UsersSchema.methods.hasSamePassword = function(requestedPassword) {
	return bcrypt.compareSync(requestedPassword, this.password);
};

UsersSchema.pre('save', function(next) {
	const user = this;

	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(user.password, salt, function(err, hash) {
			user.password = hash;
			next();
		});
	});
});

UsersSchema.methods = {
	isSamePassword: function(requestedPassword) {
		return bcrypt.compareSync(requestedPassword, this.password);
	}
};
//tables SONT TJ AU PLURIEL SUR MONGO !!
const User = mongoose.model('users', UsersSchema);
module.exports = User;
