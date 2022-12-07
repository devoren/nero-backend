const nodemailer = require("nodemailer");

const generateOTP = (n = 5) => {
	return Math.round(Math.random() * 9 * 10 ** n);
};

const mailTransport = () =>
	nodemailer.createTransport({
		service: "Gmail",
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: "oburgsk11@gmail.com",
			pass: process.env.GOOGLE_PASSWORD,
		},
		greetingTimeout: 5 * 1000,
		tls: { rejectUnauthorized: false },
		logger: true,
		debug: true,
	});

module.exports = { generateOTP, mailTransport };
