const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		mongoose.connect(process.env.DATABASE_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
	} catch (err) {
		console.log(err);
	}
};

module.exports = connectDB;
