const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db.js')
const indexRouter = require('./routes/index.js')

//Load config
dotenv.config({ path: './config/config.env' });

//Database connection
connectDB();

//initialization of express app
const app = express();

if (process.env.NODE_ENV === 'development') { 
	app.use(morgan('dev'));
}

//Handlebars
app.engine('.hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs')

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
