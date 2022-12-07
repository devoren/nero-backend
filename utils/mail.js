const nodemailer = require("nodemailer");

const generateOTP = (n = 5) => {
	return Math.round(Math.random() * 9 * 10 ** n);
};

const mailTransport = () =>
	nodemailer.createTransport({
		service: "Gmail",
		// secure: true,
		auth: {
			user: "oburgsk11@gmail.com",
			pass: process.env.GOOGLE_PASSWORD,
		},
		tls: { rejectUnauthorized: false },
		logger: true,
		// debug: true,
	});

mailTransport().verify((error) => {
	if (error) {
		console.error("Server cannot send messages");
		console.error(error);
		throw error;
	} else {
		console.log("Server is ready to send messages");
	}
});
module.exports = { generateOTP, mailTransport };
