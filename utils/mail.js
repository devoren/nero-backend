const nodemailer = require("nodemailer");

const generateOTP = (n = 5) => {
	return Math.round(Math.random() * 9 * 10 ** n);
};

const mailTransport = () =>
	nodemailer.createTransport({
		service: "Gmail",
		host: "smtp.gmail.com",
		// secure: true,
		auth: {
			user: "oburgsk11@gmail.com",
			pass: process.env.GOOGLE_PASSWORD,
		},
		logger: true,
		// debug: true,
		tls: {
			rejectUnauthorized: false,
		},
		// host: "smtp.mailtrap.io",
		// port: 2525,
		// auth: {
		//   user: "bfb845e95091b7",
		//   pass: "636f2b6111d70d"
		// }
	});

module.exports = { generateOTP, mailTransport };
