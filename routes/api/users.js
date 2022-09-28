const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');

router.route('/').get(usersController.getAllUsers);

router.route('/:id').get(usersController.getUser);

module.exports = router;
