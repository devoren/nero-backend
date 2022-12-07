const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const sendMail = require("../services/sendMail");
const { generateOTP, mailTransport } = require("../utils/mail");

const handleVerifyEmail = async (req, res) => {
	const { email, otp } = req.body;
	const foundUser = await User.findOne({
		email,
	});
	if (!foundUser) {
		return res.status(404).json({ message: "Пользователь не найден" }); //Unauthorized
	}
	const match = await bcrypt.compare(otp, foundUser.otp);

	if (match) {
		const updatedUser = await User.findByIdAndUpdate(foundUser._id, {
			$set: { active: true },
		});
		const { password, otp, ...userData } = updatedUser._doc;

		const accessToken = jwt.sign(
			{
				_id: userData._id,
			},
			process.env.ACCESS_TOKEN_SECRET,
			{
				expiresIn: "1d",
			}
		);

		res.status(200).json({ user: userData, accessToken });
	} else {
		res.status(400).json({
			message: "Неверный проверочный код",
		});
	}
};

const handleResendCode = async (req, res) => {
	const { email } = req.body;

	const foundUser = await User.findOne({ email }).exec();
	if (!foundUser) {
		return res.status(401).json({ message: "Пользователь не найден" }); //Unauthorized
	}
	if (foundUser) {
		const salt = await bcrypt.genSalt(10);
		const otpGenerated = generateOTP();
		const hashedOTP = await bcrypt.hash(otpGenerated.toString(), salt);
		foundUser.otp = hashedOTP;
		const user = await foundUser.save();

		await sendMail({
			to: email,
			otp: otpGenerated,
		})
			.then(() => {
				res.json({
					message: `Проверочный код отправлен на ${email}`,
				});
			})
			.catch((e) => {
				console.log(e);
			});
	}
};

const handleContact = async (req, res) => {
	const { firstName, lastName, email, message, phone } = req.body;
	const name = `${firstName} ${lastName}`;
	const date = Date.now();

	await new Promise((resolve, reject) => {
		// verify connection configuration
		mailTransport().verify(function (error, success) {
			if (error) {
				console.log(error);
				reject(error);
			} else {
				console.log("Server is ready to take our messages");
				resolve(success);
			}
		});
	});

	try {
		await sendMail({
			to: "orennurkeldi1@gmail.com",
			contact: true,
			name,
			message,
			phone,
			date,
			email,
			subject: `Contact Form Submission - Portfolio`,
		})
			.then(() => {
				res.status(200).json({
					message: `Message sent successfully`,
				});
			})
			.catch((e) => {
				console.log(e);
			});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: `Something went wrong.`,
		});
	}
};

module.exports = { handleVerifyEmail, handleResendCode, handleContact };
