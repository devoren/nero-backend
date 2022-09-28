const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		tags: {
			type: [String],
			default: [],
		},
		viewsCount: {
			type: Number,
			default: 0,
		},
		comment: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Comment',
			},
		],
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		imageUrl: String,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Post', PostSchema);
