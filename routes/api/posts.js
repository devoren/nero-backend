const express = require('express');
const router = express.Router();
const postController = require('../../controllers/postController');
const postValidation = require('../../validation/post');
const validationErrorHandler = require('../../middleware/validationErrorHandler');
const commentController = require('../../controllers/commentController');

router
	.route('/')
	// .get(postController.getAllPosts)
	.post(postValidation, validationErrorHandler, postController.addPost);

// router.route('/:id').get(postController.getPost);
router
	.route('/:id')
	.put(postValidation, validationErrorHandler, postController.updatePost);
router.route('/:id').delete(postController.deletePost);

router.route('/comments').post(commentController.addComment);
router.route('/comments/:postId').put(commentController.updateComment);
router.route('/comments/:postId').delete(commentController.deleteComment);

module.exports = router;
