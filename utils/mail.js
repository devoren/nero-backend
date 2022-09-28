const nodemailer = require('nodemailer');

const generateOTP = (n = 5) => {
	return Math.round(Math.random() * 9 * 10 ** n);
};

const mailTransport = () =>
	nodemailer.createTransport({
		service: 'Gmail',
		// secure: true,
		auth: {
			user: 'orennurkeldi1@gmail.com',
			pass: 'fjsemruqsdqylhiv',
		},
		logger: true,
		// debug: true,
		tls: {
			rejectUnauthorized: false,
		},
	});

module.exports = { generateOTP, mailTransport };
