const nodemailer = require("nodemailer");

const generateOTP = (n = 5) => {
	return Math.round(Math.random() * 9 * 10 ** n);
};

let mailConfig;
if (process.env.NODE_ENV === "production") {
	mailConfig = {
		port: 587,
		secure: false,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PWD,
		},
		logger: true,
		pool: true,
		// debug: true,
	};
} else {
	mailConfig = {
		service: "Gmail",
		// secure: true,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PWD,
		},
		tls: { rejectUnauthorized: false },
		logger: true,
		// debug: true,
	};
}

const mailTransport = () => nodemailer.createTransport(mailConfig);

module.exports = { generateOTP, mailTransport };
