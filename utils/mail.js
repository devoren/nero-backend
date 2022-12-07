const nodemailer = require("nodemailer");

const generateOTP = (n = 5) => {
	return Math.round(Math.random() * 9 * 10 ** n);
};

let mailConfig;
if (process.env.NODE_ENV === "production") {
	mailConfig = {
		service: "Gmail",
		secure: true,
		port: 465,
		auth: {
			user: "oburgsk11@gmail.com",
			pass: process.env.GOOGLE_PASSWORD,
		},
		tls: { rejectUnauthorized: false },
		logger: true,
		// debug: true,
	};
} else {
	mailConfig = {
		service: "Gmail",
		// secure: true,
		auth: {
			user: "oburgsk11@gmail.com",
			pass: process.env.GOOGLE_PASSWORD,
		},
		tls: { rejectUnauthorized: false },
		logger: true,
		// debug: true,
	};
}

const mailTransport = () => nodemailer.createTransport(mailConfig);

module.exports = { generateOTP, mailTransport };
