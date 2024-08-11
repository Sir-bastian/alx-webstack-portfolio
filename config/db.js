const mongoose = require('mongoose');
const events = require('events');



const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch(err) {
		console.error('Error connecting to MongoDB:', err);
		process.exit(1);
	}
}


module.exports = connectDB;
