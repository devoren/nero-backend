const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const sendMail = require('../services/sendMail');
const { generateOTP } = require('../utils/mail');

const handleLogin = async (req, res) => {
	const cookies = req.cookies;
	console.log(`cookie available at login: ${JSON.stringify(cookies)}`);
	const { email, password } = req.body;

	const foundUser = await User.findOne({ email: email }).exec();
	if (!foundUser) {
		return res.status(401).json({ message: 'Неверный логин или пароль' }); //Unauthorized
	}
	// evaluate password
	const match = await bcrypt.compare(password, foundUser.password);
	if (match) {
		const accessToken = jwt.sign(
			{
				_id: foundUser._id,
			},
			process.env.ACCESS_TOKEN_SECRET,
			{
				expiresIn: '1d',
			}
		);

		const newRefreshToken = jwt.sign(
			{ _id: foundUser._id },
			process.env.REFRESH_TOKEN_SECRET,
			{ expiresIn: '30d' }
		);

		let newRefreshTokenArray = !cookies.token
			? foundUser.refreshToken
			: foundUser.refreshToken.filter((rt) => rt !== cookies.token);
		if (cookies?.jwt) {
			/* 
			Scenario added here:
				1) User logs in but never uses RT and does not logout
				2) RT is stolen
				3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
			*/
			const refreshToken = cookies.jwt;
			const foundToken = await User.findOne({ refreshToken }).exec();

			// Detected refresh token reuse!
			if (!foundToken) {
				console.log('attempted resfresh token reuse to login!');
				// clear out ALL previous refresh tokens
				newRefreshTokenArray = [];
			}
			res.clearCookie('jwt', {
				httpOnly: true,
				sameSite: 'none',
				secure: true,
			});
		}

		// Saving refreshToken with current user
		foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
		foundUser.lastLogin = Date.now();
		const user = await foundUser.save();

		// Cookie that JavaScript can't access
		res.cookie('jwt', newRefreshToken, {
			httpOnly: true,
			sameSite: 'none',
			secure: true, // secure is needed for Chrome but not for Thunder Client
			maxAge: 30 * 24 * 60 * 60 * 1000,
		});

		const { password: pwd, ...userData } = user._doc;

		if (!user.active) {
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
						userData,
					});
				})
				.catch((e) => {
					console.log(e);
				});
		} else {
			res.json({ user: userData, accessToken });
		}
	} else {
		res.status(400).json({
			message: 'Неверный логин или пароль',
		});
	}
};

module.exports = { handleLogin };
