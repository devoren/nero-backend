const crypto = require('crypto');
const bcrypt = require('bcrypt');

const Token = require('../model/Token');
const User = require('../model/User');

const sendMail = require('../services/sendMail');

const handleResetPassword = async (req, res) => {
	const { email } = req.body;
	const foundUser = await User.findOne({ email }).exec();
	if (!foundUser) {
		return res.status(204).json({ message: `Пользователь не найден` });
	}

	let foundToken = await Token.findOne({ user: foundUser._id }).exec();
	if (foundToken) {
		await foundToken.deleteOne();
	}

	const salt = await bcrypt.genSalt(10);
	const resetToken = crypto.randomBytes(32).toString('hex');
	const hashedToken = await bcrypt.hash(resetToken, salt);

	foundToken = await Token.create({
		user: foundUser._id,
		token: hashedToken,
	});
	const link = `${process.env.BASE_URL}/account/recovery/${foundUser._id}/${resetToken}`;
	await sendMail({
		to: email,
		subject: 'Восстановите пароль вашего аккаунта Nero',
		token: link,
	})
		.then(() => {
			res.json({
				message: `Ссылка для восстановления пароля отправлена на ${email}`,
			});
		})
		.catch((e) => {
			console.log(e);
		});
};

const handleChangePassword = async (req, res) => {
	const { userId, token } = req.params;
	const foundUser = await User.findById({ _id: userId }).exec();
	if (!foundUser) {
		return res.status(204).json({ message: `Пользователь не найден` });
	}

	const foundToken = await Token.findOne({
		user: foundUser._id,
	}).exec();

	if (!foundToken) {
		return res.status(400).json({
			message: `Недействительная ссылка или срок действия истек.`,
		});
	}

	const isValid = await bcrypt.compare(
		token.toString(),
		foundToken.token.toString()
	);

	if (!isValid) {
		return res.status(400).json({
			message: `Недействительная ссылка или срок действия истек.`,
		});
	}
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);
	foundUser.password = hashedPassword;

	await foundUser.save();
	await foundToken.deleteOne();

	await sendMail({
		to: foundUser.email,
		subject: 'Пароль успешно изменен',
		name: [foundUser.fullName, foundUser.updatedAt],
	})
		.then(() => {
			res.status(200).json({
				message: `Пароль успешно изменен.`,
			});
		})
		.catch((e) => {
			console.log(e);
		});
};

module.exports = {
	handleResetPassword,
	handleChangePassword,
};
