const Comment = require('../model/Comment');
const Post = require('../model/Post');
const shuffleArray = require('../utils/array');

const getLastTags = async (req, res) => {
	try {
		const posts = await Post.find().limit(5).exec();
		if (!posts) {
			console.log(posts);
			return res.status(204).json({ message: 'No tags found.' });
		}
		const tags = shuffleArray([
			...new Set(posts.map((post) => post.tags).flat()),
		]);
		const slicedTags = tags.length > 5 ? tags.slice(0, 5) : tags;
		res.json(slicedTags);
	} catch (err) {
		return res
			.status(500)
			.json({ message: 'Не удалось вернуть тэги', error: err });
	}
};

const getAllPosts = async (req, res) => {
	const posts = await Post.find()
		.populate('user')
		.populate('comment')
		.sort({ updatedAt: -1, createdAt: -1 })
		.exec();
	if (!posts) return res.status(204).json({ message: 'No posts found.' });
	res.json(posts);
};

const getPost = async (req, res) => {
	const postId = req.params?.id;
	if (!postId) {
		return res.status(400).json({ message: 'ID parametr is required.' });
	}

	Post.findOneAndUpdate(
		{
			_id: postId,
		},
		{
			$inc: {
				viewsCount: 1,
			},
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
	)
		.populate('user')
		.populate('comment');
};

const getTag = async (req, res) => {
	const tag = req.params?.tag;
	if (!tag) {
		return res.status(400).json({ message: 'Tag parametr is required.' });
	}

	const tags = await Post.find({
		tags: tag,
	})
		.populate('user')
		.populate('comment');
	if (!tags) {
		return res
			.status(204)
			.json({ message: `No user matches tag ${req.params.tag}.` });
	}
	res.json(tags);
};

const addPost = async (req, res) => {
	try {
		const { title, text, tags, imageUrl, viewsCount } = req.body;
		const post = await Post.create({
			title,
			text,
			tags,
			imageUrl,
			viewsCount,
			user: req.userId,
		});
		res.json(post);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const updatePost = (req, res) => {
	const postId = req.params?.id;
	const { title, text, tags, imageUrl, viewsCount } = req.body;
	if (!postId) {
		return res.status(400).json({ message: 'ID parametr is required.' });
	}
	Post.findOneAndUpdate(
		{ _id: postId },
		{
			title,
			text,
			tags,
			imageUrl,
			viewsCount,
			user: req.userId,
		},
		{
			returnDocument: 'after',
		},
		(err, doc) => {
			if (err)
				return res
					.status(500)
					.json({ message: 'Не удалось обновить статью' });
			if (!doc) {
				return res.status(204).json({ message: 'Статья не найдена' });
			}
			res.json({ success: true });
		}
	);
};

const deletePost = (req, res) => {
	const postId = req.params?.id;
	if (!postId) {
		return res.status(400).json({ message: 'ID parametr is required.' });
	}
	Post.findOneAndDelete({ _id: postId }, (err, doc) => {
		if (err)
			return res
				.status(500)
				.json({ message: 'Не удалось удалить статью' });
		if (!doc) {
			return res.status(204).json({ message: 'Статья не найдена' });
		}
		Comment.findOneAndDelete({ post: postId });
		res.json({ success: true });
	});
};

module.exports = {
	getAllPosts,
	getLastTags,
	getTag,
	getPost,
	addPost,
	updatePost,
	deletePost,
};
