const User = require('../model/User');

const handleAuthorized = async (req, res) => {
	console.log(req);
	const user = await User.findById(req.userId);
	if (!user) {
		return res
			.status(204)
			.json({ message: `No user matches ID ${req.userId}.` });
	}
	res.json(user);
};

module.exports = {
	handleAuthorized,
};
