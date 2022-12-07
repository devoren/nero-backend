const nodemailer = require("nodemailer");

const generateOTP = (n = 5) => {
	return Math.round(Math.random() * 9 * 10 ** n);
};

const mailTransport = () =>
	nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		auth: {
			user: "oburgsk11@gmail.com",
			pass: process.env.GOOGLE_PASSWORD,
		},
		greetingTimeout: 10000,
		tls: { rejectUnauthorized: false, port: 587 },
		logger: true,
		debug: true,
	});

module.exports = { generateOTP, mailTransport };
