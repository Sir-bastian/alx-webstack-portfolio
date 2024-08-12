const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const passport = require('passport')
const sess = require('express-session')
const connectDB = require('./config/db.js')
const indexRouter = require('./routes/index.js')
const session = require('express-session')

//Load config
dotenv.config({ path: './config/config.env' });

//Paspport config
require('./config/passport')(passport)

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
	saveUninitialized: false
}));

//Handlebars
app.engine('.hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Passwport middleware
app.use(passport.initialize());
app.use(passport.session());

//Static Folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', indexRouter);

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something went wrong!');
});


const PORT = process.env.PORT || 3000;


app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
