const Comment = require('../model/Comment');
const Post = require('../model/Post');
const shuffleArray = require('../utils/array');

const getLastComments = async (req, res) => {
	try {
		const comments = await Comment.find()
			.populate('post')
			.populate('user')
			.exec();
		if (!comments) {
			return res.status(204).json({ message: 'No comments found.' });
		}
		const diffComments = shuffleArray([...new Set(comments)]);
		const slicedComments =
			diffComments.length > 5 ? diffComments.slice(0, 5) : diffComments;
		res.json(slicedComments);
	} catch (err) {
		return res
			.status(500)
			.json({ message: 'Не удалось вернуть комментария', error: err });
	}
};

const getAllComments = async (req, res) => {
	const { postId } = req.params;
	const comments = await Comment.find({ post: postId })
		.populate('post')
		.populate('user')
		.sort({ createdAt: -1 })
		.exec();
	if (!comments)
		return res.status(204).json({ message: 'No comments found.' });
	res.json(comments.filter((c) => c.user !== null));
};

const getComment = async (req, res) => {
	const postId = req.params?.id;
	if (!postId) {
		return res.status(400).json({ message: 'ID parametr is required.' });
	}

	Post.findOneAndUpdate(
		{
			_id: postId,
		},
		{
			returnDocument: 'after',
			timestamps: false,
		},
		(err, doc) => {
			if (err)
				return res
					.status(500)
					.json({ message: 'Не удалось вернуть статью', error: err });
			if (!doc) {
				return res.status(204).json({ message: 'Статья не найдена' });
			}
			res.json(doc);
		}
	).populate('user');
};

const addComment = async (req, res) => {
	try {
		const { text, postId } = req.body;
		const comment = await Comment.create({
			text,
			user: req.userId,
			post: postId,
		});
		const postRelated = await Post.findByIdAndUpdate(
			postId,
			{
				$push: {
					comment,
				},
			},
			{ timestamps: false }
		);
		res.json(comment);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const updateComment = (req, res) => {
	const postId = req.params?.id;
	const { text } = req.body;
	if (!postId) {
		return res.status(400).json({ message: 'ID parametr is required.' });
	}
	Post.findOneAndUpdate(
		{ _id: postId },
		{
			text,
			user: req.userId,
		},
		{
			returnDocument: 'after',
		},
		(err, doc) => {
			if (err)
				return res
					.status(500)
					.json({ message: 'Не удалось обновить комментарий' });
			if (!doc) {
				return res.status(204).json({ message: 'Статья не найдена' });
			}
			res.json({ success: true });
		}
	);
};

const deleteComment = (req, res) => {
	const commentId = req.params?.postId;
	if (!commentId) {
		return res.status(400).json({ message: 'ID parametr is required.' });
	}
	Comment.findOneAndDelete({ _id: commentId }, (err, doc) => {
		if (err)
			return res
				.status(500)
				.json({ message: 'Не удалось удалить комментарию' });
		if (!doc) {
			return res.status(204).json({ message: 'Комментарий не найден' });
		}
		res.json({ success: true });
	});
};

module.exports = {
	getLastComments,
	getAllComments,
	getComment,
	addComment,
	updateComment,
	deleteComment,
};
