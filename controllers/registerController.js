const User = require('../model/User');
const bcrypt = require('bcrypt');

const sendMail = require('../services/sendMail');
const { generateOTP } = require('../utils/mail');

const handleNewUser = async (req, res) => {
	const { fullName, email } = req.body;
	let avatarUrl = req.body.avatarUrl;
	// check for duplicate usernames in the db
	const duplicate = await User.findOne({ email }).exec();
	if (duplicate)
		return res.status(409).json({
			message: 'Этот электронный адрес уже используется.',
		}); // Conflict
	if (avatarUrl && avatarUrl.startsWith('/uploads/')) {
		avatarUrl = req.protocol + '://' + req.get('host') + avatarUrl;
	}
	try {
		// encrypt password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);
		const otpGenerated = generateOTP();
		const hashedOTP = await bcrypt.hash(otpGenerated.toString(), salt);

		// create and store new user
		const user = await User.create({
			email,
			fullName,
			avatarUrl,
			password: hashedPassword,
			otp: hashedOTP,
		});

		const { password, otp, ...userData } = user._doc;

		await sendMail({
			to: email,
			otp: otpGenerated,
		})
			.then(() => {
				res.json({
					message: `Проверочный код отправлен на ${email}`,
					userData,
				});
			})
			.catch((e) => {
				console.log(e);
			});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { handleNewUser };
