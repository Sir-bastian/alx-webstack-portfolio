const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

//Load config
dotenv.config({ path: './config/config.env' });

//Passport config
require('./config/passport')(passport);

//Database connection
connectDB();

//initialization of express app
const app = express();

if (process.env.NODE_ENV === 'development') { 
	app.use(morgan('dev'));
}

//Session Middlewares
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({ mongoUrl: process.env.MONGO_URI })
}));

//Handlebars
app.engine('.hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Parse Json request bodies middleware URL-encoded request bvodies0
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Passwport middleware
app.use(passport.initialize());
app.use(passport.session());

//Static Folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/register', require('./routes/index'));

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something went wrong!');
});


const PORT = process.env.PORT || 3000;


app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
