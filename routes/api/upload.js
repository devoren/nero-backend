const express = require('express');
const router = express.Router();
const upload = require('../../middleware/storage');

router.route('/').post(upload.single('image'), (req, res) => {
	res.json({
		url: `/uploads/${req.file.originalname}`,
	});
});

module.exports = router;
