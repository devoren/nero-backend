const nodemailer = require("nodemailer");

const generateOTP = (n = 5) => {
	return Math.round(Math.random() * 9 * 10 ** n);
};

const mailTransport = () =>
	nodemailer.createTransport({
		service: "Gmail",
		// secure: true,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PWD,
		},
		tls: { rejectUnauthorized: false },
		logger: true,
		// debug: true,
	});

module.exports = { generateOTP, mailTransport };
