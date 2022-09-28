const { body } = require('express-validator');

const postValidation = [
	body('title', 'Введите заголовок статьи').isLength({ min: 5 }).isString(),
	body('text', 'Введите текст статьи')
		.isLength({
			min: 10,
		})
		.isString(),
	body('tags', 'Неверный формат тэгов (укажите массив)').optional().isArray(),
	body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];

module.exports = postValidation;
