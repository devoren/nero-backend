const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const emailController = require('../controllers/emailController');
const passwordController = require('../controllers/passwordController');
const { registerValidation, loginValidation } = require('../validation/auth');
const validationErrorHandler = require('../middleware/validationErrorHandler');

router.post(
	'/register',
	registerValidation,
	validationErrorHandler,
	registerController.handleNewUser
);

router.post(
	'/login',
	loginValidation,
	validationErrorHandler,
	loginController.handleLogin
);

router.post('/verify', emailController.handleVerifyEmail);
router.post('/resendCode', emailController.handleResendCode);

router.post('/recovery', passwordController.handleResetPassword);
router.post(
	'/recovery/:userId/:token',
	passwordController.handleChangePassword
);

module.exports = router;
