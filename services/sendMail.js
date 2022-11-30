const { mailTransport } = require("../utils/mail");
const { mailOptions } = require("../config/mail");

module.exports = async (params) => {
	try {
		const mail = mailTransport().sendMail(
			{
				...mailOptions,
				from: params.from ? params.from : mailOptions.from,
				to: params.to,
				subject: params.subject ? params.subject : mailOptions.subject,
				html: params.otp
					? mailOptions.html({
							type: "otp",
							value: params.otp,
					  })
					: params.token
					? mailOptions.html({
							type: "token",
							value: params.token,
					  })
					: params.contact
					? mailOptions.html({
							type: "contact",
							name: params.name,
							email: params.email,
							message: params.message,
							phone: params.phone,
							date: params.date,
					  })
					: mailOptions.html({ type: "success", value: params.name }),
			},
			(error, info) => {
				if (error) {
					return console.log(error);
				}
				console.log("mail info: ", info);
			}
		);
		return mail;
	} catch (e) {
		console.log(e);
		return;
	}
};
