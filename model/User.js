const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		avatarUrl: String,
		originalAvatarUrl: String,
		refreshToken: [String],
		lastLogin: {
			type: Date,
			default: Date.now(),
		},
		active: {
			type: Boolean,
			default: false,
		},
		otp: {
			type: String,
			required: true,
		},
		expiresAt: {
			type: Date,
			default: Date.now(),
			index: {
				unique: true,
				expires: 1800,
				background: true,
				partialFilterExpression: {
					active: false,
				},
			},
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('User', UserSchema);
