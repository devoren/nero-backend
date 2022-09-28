const User = require('../model/User');

const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
	const cookies = req.cookies;
	console.log(cookies);
	if (!cookies?.jwt) {
		console.log('None auth');
		return res.sendStatus(401);
	}
	console.log('Cookies: ', cookies.jwt);
	const refreshToken = cookies.jwt;
	res.clearCookie('jwt', {
		httpOnly: true,
		sameSite: 'none',
		secure: true,
	});

	const foundUser = await User.findOne({ refreshToken }).exec();
	// Detected refersh token reuse!
	if (!foundUser) {
		jwt.verify(
			refreshToken,
			process.env.REFRESH_TOKEN_SECRET,
			async (err, decoded) => {
				if (err) return res.sendStatus(403); // Forbidden
				console.log('attempted refresh token reuse!');
				const hackedUser = await User.findOne({
					id: decoded._id,
				}).exec();
				hackedUser.refreshToken = [];
				const result = await hackedUser.save();
				console.log(result);
			}
		);
		return res.sendStatus(403); // Forbidden
	}

	const newRefreshTokenArray = foundUser.refreshToken.filter(
		(rt) => rt !== refreshToken
	);

	// evaluate jwt
	jwt.verify(
		refreshToken,
		process.env.REFRESH_TOKEN_SECRET,
		async (err, decoded) => {
			if (err) {
				console.log('expired refresh token');
				foundUser.refreshToken = [...newRefreshTokenArray];
				const result = await foundUser.save();
				console.log(result);
			}
			if (foundUser._id.toString() !== decoded._id) {
				console.log('forbidden is here', foundUser._id, decoded._id);
				return res.sendStatus(403);
			}

			// Refresh token was still valid
			const accessToken = jwt.sign(
				{
					_id: decoded._id,
				},
				process.env.ACCESS_TOKEN_SECRET,
				{ expiresIn: '1d' }
			);

			const newRefreshToken = jwt.sign(
				{ _id: foundUser._id },
				process.env.REFRESH_TOKEN_SECRET,
				{ expiresIn: '30d' }
			);
			// Saving newRefreshToken with current user
			foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
			await foundUser.save();

			// Cookie that JavaScript can't access
			res.cookie('jwt', newRefreshToken, {
				httpOnly: true,
				sameSite: 'none',
				secure: true, // secure is needed for Chrome but not for Thunder Client
				maxAge: 30 * 60 * 60 * 1000,
			});

			res.json({ accessToken });
		}
	);
};

module.exports = { handleRefreshToken };
