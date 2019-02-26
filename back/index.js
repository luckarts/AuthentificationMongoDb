const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const passport = require('passport');

//morgan middleware to tell express find all request
//Load Routes

const User = require('./routes/user');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// Connect to mongoose
mongoose
	.connect('mongodb://localhost/bookstore', {
		useMongoClient: true
	})
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));
app.use(morgan('dev'));
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// resolve Cors protection
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
});

app.use(passport.initialize());
require('./strategy')(passport);
// Index Route

app.use('/api/user', User);

//requete Get !
app.get('/', (req, res) => {
	res.send('Please use api/books or api/genres');
});

// error
app.use((req, res, next) => {
	const error = new Error('not Found');
	error.status = 404;
	next(error);
});
app.use((req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: { message: error.message }
	});
});

const port = 5000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
