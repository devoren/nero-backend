const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
	try {
		const authHeader =
			req.headers.authorization || req.headers.Authorization;
		if (!authHeader?.startsWith('Bearer '))
			return res.status(401).json({ message: 'Token error' });
		const token = authHeader.split(' ')[1];
		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
			if (err) return res.sendStatus(403); // invalid token
			req.userId = decoded._id;
			next();
		});
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

module.exports = verifyJWT;
