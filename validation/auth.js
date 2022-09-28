const { body } = require('express-validator');

const registerValidation = [
	body('email', 'Неверный формат почты').isEmail(),
	body('password', 'Пароль должен быть минимум 8 символов').isLength({
		min: 8,
	}),
	body('fullName', 'Укажите имя').isLength({ min: 3 }),
	body('avatarUrl', 'Неверная ссылка на аватарку').optional().isString(),
	// .isDataURI(),
];
const loginValidation = [
	body('email', 'Неверный формат почты').isEmail(),
	body('password', 'Пароль должен быть минимум 8 символов').isLength({
		min: 8,
	}),
];

module.exports = { registerValidation, loginValidation };
