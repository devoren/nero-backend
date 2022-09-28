const User = require('../model/User');

const getAllUsers = async (req, res) => {
	const users = await User.find();
	if (!users) return res.status(204).json({ message: 'No users found.' });
	res.json(users);
};

const getUser = async (req, res) => {
	if (!req.params?.id) {
		return res.status(400).json({ message: 'ID parametr is required.' });
	}

	const user = await User.findOne({ _id: req.params.id }).exec();
	if (!user) {
		return res
			.status(204)
			.json({ message: `No user matches ID ${req.params.id}.` });
	}
	res.json(user);
};

module.exports = {
	getAllUsers,
	getUser,
};
