const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const logger = require('express-handlebars')
const connectDB = require('./config/db.js')


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
app.engine('.hbs', engine({ defaultLayout: 'main.hbs', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

const PORT =process.env.PORT || 3000;


app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
);
