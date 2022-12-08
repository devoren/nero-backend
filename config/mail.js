// send mail with defined transport object
const mailOptions = {
	from: '"Nero"<oburgsk11@gmail.com>',
	subject: "Пожалуйста, подтвердите свой адрес электронной почты",
	html: (otp) => {
		const { type, value, name, email, message, phone, date } = otp;
		return type === "otp"
			? `
		<!DOCTYPE html>
		<html lang="ru" class="miro" style="background-color:#f3f4f8;font-size:0;line-height:0">
		  <head xmlns="http://www.w3.org/1999/xhtml" lang="ru" xml:lang="ru" style="font-family:Helvetica,Arial,sans-serif">
			<meta charset="UTF-8" style="font-family:Helvetica,Arial,sans-serif">
			<title style="font-family:Helvetica,Arial,sans-serif">Код подтверждения для аккаунта Nero</title>
			<link rel="stylesheet" href="../css/app.css" style="font-family:Helvetica,Arial,sans-serif">
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" style="font-family:Helvetica,Arial,sans-serif">
			<meta name="viewport" content="width=device-width" style="font-family:Helvetica,Arial,sans-serif">
		  </head>
		  <body style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;Margin:0;background:#f5f5f5;background-color:#f3f4f8;box-sizing:border-box;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.43;margin:0;min-width:600px;padding:0;text-align:left;width:100%!important">
			<table class="miro__container" align="center" width="600" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;font-family:Helvetica,Arial,sans-serif;max-width:600px;min-width:600px;padding:0;text-align:left;vertical-align:top">
			  <tr style="font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top">
				<td class="miro__content-wrapper" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-height:1.43;margin:0;padding:0;padding-top:43px;text-align:left;vertical-align:top;word-wrap:break-word">
				  <div class="miro__content" style="background-color:#fff;font-family:Helvetica,Arial,sans-serif">
					<div class="miro__header" style="font-family:Helvetica,Arial,sans-serif;height:100%;min-height:100px;padding:0 40px">
					  <table class="miro__header-content" style="border-collapse:collapse;border-spacing:0;font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top;width:100%">
						<tr style="font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top">
						  <td class="miro__col-header-logo" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-height:1.43;margin:0;padding:0;padding-top:32px;text-align:left;vertical-align:top;width:50%;word-wrap:break-word">
							<a href=${process.env.BASE_URL} target="_blank" style="Margin:0;color:#2a79ff;font-family:Helvetica,Arial,sans-serif;font-weight:400;line-height:1.43;margin:0;padding:0;text-align:left;text-decoration:none">
							  <img src="https://sun9-64.userapi.com/impg/MF7VrXHarYwgAmKu2ShhZ6-1rkfp0FIHLMjgzw/7gnrFk8J8PU.jpg?size=2400x2400&quality=95&sign=6af17df6ef5c94ff137c43f35df0b828&type=album" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;font-family:Helvetica,Arial,sans-serif;height:60px;max-height:100%;max-width:100%;outline:0;text-decoration:none;width:auto">
							</a>
						  </td>
						  <td class="miro__col-header-btn" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-height:1.43;margin:0;padding:0;padding-top:26px;text-align:right;vertical-align:top;width:50%;word-wrap:break-word">
							<a href=${process.env.BASE_URL} class="miro-btn" target="_blank" style="Margin:0;background-color:#fff;border:1px solid #050038;border-radius:4px;box-sizing:border-box;color:#050038!important;cursor:pointer;display:inline-block;font-family:Helvetica,Arial,sans-serif;font-size:16px!important;font-stretch:normal;font-style:normal;font-weight:400;height:48px;letter-spacing:normal;line-height:48px!important;margin:0;padding:0;text-align:center;text-decoration:none;white-space:nowrap;width:128px">
							<span style="font-family:Helvetica,Arial,sans-serif">Перейти в Nero</span>
							</a>
						  </td>
						</tr>
					  </table>
					</div>
					<div class="miro__content-body" style="font-family:Helvetica,Arial,sans-serif">
					  <div class="miro-title-block" style="background-position:center;background-repeat:no-repeat;background-size:100% auto;font-family:Helvetica,Arial,sans-serif;padding:40px 40px 36px">
						<div class="miro-title-block__title font-size-42" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:42px!important;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.24">Завершить регистрацию</div>
						<div class="miro-title-block__subtitle font-size-20 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:20px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:16px;opacity:.6">Пожалуйста, введите этот код подтверждения в окне, где вы начали создавать свой
						учетная запись:</div>
					  </div>
					  <div class="miro-confirmation-code-block" style="font-family:Helvetica,Arial,sans-serif;padding:0 40px">
						<div class="miro-confirmation-code-block__code" style="background-color:#f3f4f8;border-radius:4px;color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:48px;font-stretch:normal;font-style:normal;font-weight:700;height:128px;letter-spacing:normal;line-height:128px;text-align:center">${value}</div>
					  </div>
					  <div class="miro-title-block" style="background-position:center;background-repeat:no-repeat;background-size:100% auto;font-family:Helvetica,Arial,sans-serif;padding:10px 40px 23px">
						<div class="miro-title-block__title font-size-42" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:42px!important;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.24"></div>
						<div class="miro-title-block__subtitle font-size-18 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:18px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:16px;opacity:.6">Если вы не создали учетную запись в Nero, проигнорируйте это сообщение.</div>
					  </div>
					  <div class="miro__sep" style="background-color:#e1e0e7;font-family:Helvetica,Arial,sans-serif;height:1px"></div>
					</div>
				  </div>
				  <div class="miro__footer" style="font-family:Helvetica,Arial,sans-serif;padding-bottom:72px;padding-top:42px">
					<div class="miro__footer-title" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.38;margin-top:0!important;opacity:.7;text-align:center">Вы получили это уведомление, так как зарегистрировались
					  <br style="font-family:Helvetica,Arial,sans-serif">на
					  <a href=${process.env.BASE_URL} target="_blank" style="Margin:0;color:inherit;font-family:Helvetica,Arial,sans-serif;font-weight:400;line-height:1.43;margin:0;padding:0;text-align:left;text-decoration:none">Nero</a> — Соединение идей и людей — как разговоры могут изменить нашу жизнь.</div>
				  </div>
				</td>
			  </tr>
			</table>
		
			<!-- prevent Gmail on iOS font size manipulation -->
			<div style="display:none;font:15px courier;font-family:Helvetica,Arial,sans-serif;line-height:0;white-space:nowrap">                                                                             
			                                           </div>
		  </body>
		</html>`
			: type === "token"
			? `
		<!DOCTYPE html>
		<html lang="ru" class="miro" style="background-color:#f3f4f8;font-size:0;line-height:0">
		  <head xmlns="http://www.w3.org/1999/xhtml" lang="ru" xml:lang="ru" style="font-family:Helvetica,Arial,sans-serif">
			<meta charset="UTF-8" style="font-family:Helvetica,Arial,sans-serif">
			<title style="font-family:Helvetica,Arial,sans-serif">Восстановите пароль вашего аккаунта Nero</title>
			<link rel="stylesheet" href="../css/app.css" style="font-family:Helvetica,Arial,sans-serif">
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" style="font-family:Helvetica,Arial,sans-serif">
			<meta name="viewport" content="width=device-width" style="font-family:Helvetica,Arial,sans-serif">
		  </head>
		  <body style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;Margin:0;background:#f5f5f5;background-color:#f3f4f8;box-sizing:border-box;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.43;margin:0;min-width:600px;padding:0;text-align:left;width:100%!important">
			<table class="miro__container" align="center" width="600" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;font-family:Helvetica,Arial,sans-serif;max-width:600px;min-width:600px;padding:0;text-align:left;vertical-align:top">
			  <tr style="font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top">
				<td class="miro__content-wrapper" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-height:1.43;margin:0;padding:0;padding-top:43px;text-align:left;vertical-align:top;word-wrap:break-word">
				  <div class="miro__content" style="background-color:#fff;font-family:Helvetica,Arial,sans-serif">
					<div class="miro__header" style="font-family:Helvetica,Arial,sans-serif;height:100%;min-height:100px;padding:0 40px">
					  <table class="miro__header-content" style="border-collapse:collapse;border-spacing:0;font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top;width:100%">
						<tr style="font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top">
						  <td class="miro__col-header-logo" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-height:1.43;margin:0;padding:0;padding-top:32px;text-align:left;vertical-align:top;width:50%;word-wrap:break-word">
							<a href=${process.env.BASE_URL} target="_blank" style="Margin:0;color:#2a79ff;font-family:Helvetica,Arial,sans-serif;font-weight:400;line-height:1.43;margin:0;padding:0;text-align:left;text-decoration:none">
							  <img src="https://sun9-64.userapi.com/impg/MF7VrXHarYwgAmKu2ShhZ6-1rkfp0FIHLMjgzw/7gnrFk8J8PU.jpg?size=2400x2400&quality=95&sign=6af17df6ef5c94ff137c43f35df0b828&type=album" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;font-family:Helvetica,Arial,sans-serif;height:60px;max-height:100%;max-width:100%;outline:0;text-decoration:none;width:auto">
							</a>
						  </td>
						</tr>
					  </table>
					</div>
					<div class="miro__content-body" style="font-family:Helvetica,Arial,sans-serif">
					  <div class="miro-title-block" style="background-position:center;background-repeat:no-repeat;background-size:100% auto;font-family:Helvetica,Arial,sans-serif;padding:40px 40px 36px">
						<div class="miro-title-block__title font-size-42" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:42px!important;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.24">Восстановите пароль вашего аккаунта Nero</div>
						<div class="miro-title-block__subtitle font-size-18 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:18px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:16px;opacity:.6">Мы получили запрос на изменение вашего пароля. Если вы не запрашивали смену пароля, не обращайте внимания на это сообщение.<br><br>
							Чтобы изменить свой пароль, нам нужно, чтобы вы щелкнули ссылку ниже и следовали инструкциям:</div>
					  </div>
					  <div class="miro-confirmation-code-block" style="font-family:Helvetica,Arial,sans-serif;padding:0 40px">
						<a href="${value}" class="miro-confirmation-code-block__code" style="text-decoration:none;background-color:#f3f4f8;border-radius:4px;color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:30px;font-stretch:normal;font-style:normal;font-weight:700;padding: 15px 20px; letter-spacing:normal;text-align:center;cursor:pointer;">Изменить пароль</a>
					  </div>
					  <div class="miro-title-block" style="background-position:center;background-repeat:no-repeat;background-size:100% auto;font-family:Helvetica,Arial,sans-serif;padding:10px 40px 23px">
						<div class="miro-title-block__subtitle font-size-18 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:18px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin:16px 0;opacity:.6">Если по какой-то причине ссылка выше не работает, скопируйте приведенный ниже URL-адрес и вставьте его в адресную строку браузера:</div>
						<a href="${value}" data-link-id="2" target="_blank" rel="noopener noreferrer" style="text-decoration:none;font-size: 16px;">${value}</a>
					  </div>
					  <div class="miro__sep" style="background-color:#e1e0e7;font-family:Helvetica,Arial,sans-serif;height:1px"></div>
					</div>
				  </div>
				  <div class="miro__footer" style="font-family:Helvetica,Arial,sans-serif;padding-bottom:72px;padding-top:42px">
					<div class="miro__footer-title" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.38;margin-top:0!important;opacity:.7;text-align:center">Вы получили это уведомление, так как зарегистрировались
					  <br style="font-family:Helvetica,Arial,sans-serif">на
					  <a href=${process.env.BASE_URL} target="_blank" style="Margin:0;color:inherit;font-family:Helvetica,Arial,sans-serif;font-weight:400;line-height:1.43;margin:0;padding:0;text-align:left;text-decoration:none">Nero</a> — Соединение идей и людей — как разговоры могут изменить нашу жизнь.</div>
				  </div>
				</td>
			  </tr>
			</table>
		
			<!-- prevent Gmail on iOS font size manipulation -->
			<div style="display:none;font:15px courier;font-family:Helvetica,Arial,sans-serif;line-height:0;white-space:nowrap">                                                                             
			                                           </div>
		  </body>
		</html>
		`
			: type === "contact"
			? `
			<!DOCTYPE html>
			<html lang="ru" class="miro" style="background-color:#f3f4f8;font-size:0;line-height:0">
			  <head xmlns="http://www.w3.org/1999/xhtml" lang="ru" xml:lang="ru" style="font-family:Helvetica,Arial,sans-serif">
				<meta charset="UTF-8" style="font-family:Helvetica,Arial,sans-serif">
				<title style="font-family:Helvetica,Arial,sans-serif">С вами связались</title>
				<link rel="stylesheet" href="../css/app.css" style="font-family:Helvetica,Arial,sans-serif">
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" style="font-family:Helvetica,Arial,sans-serif">
				<meta name="viewport" content="width=device-width" style="font-family:Helvetica,Arial,sans-serif">
			  </head>
			  <body style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;Margin:0;background:#f5f5f5;background-color:#f3f4f8;box-sizing:border-box;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.43;margin:0;min-width:600px;padding:0;text-align:left;width:100%!important">
				<table class="miro__container" align="center" width="600" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;font-family:Helvetica,Arial,sans-serif;max-width:600px;min-width:600px;padding:0;text-align:left;vertical-align:top">
				  <tr style="font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top">
					<td class="miro__content-wrapper" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-height:1.43;margin:0;padding:0;padding-top:43px;text-align:left;vertical-align:top;word-wrap:break-word">
					  <div class="miro__content" style="background-color:#fff;font-family:Helvetica,Arial,sans-serif">
						<div class="miro__header" style="font-family:Helvetica,Arial,sans-serif;height:100%;min-height:100px;padding:0 40px">
						  <table class="miro__header-content" style="border-collapse:collapse;border-spacing:0;font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top;width:100%">
							<tr style="font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top">
							  <td class="miro__col-header-logo" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-height:1.43;margin:0;padding:0;padding-top:32px;text-align:left;vertical-align:top;width:50%;word-wrap:break-word">
								<a href=${
									process.env.BASE_URL
								} target="_blank" style="Margin:0;color:#2a79ff;font-family:Helvetica,Arial,sans-serif;font-weight:400;line-height:1.43;margin:0;padding:0;text-align:left;text-decoration:none">
								  <img src="https://sun9-64.userapi.com/impg/MF7VrXHarYwgAmKu2ShhZ6-1rkfp0FIHLMjgzw/7gnrFk8J8PU.jpg?size=2400x2400&quality=95&sign=6af17df6ef5c94ff137c43f35df0b828&type=album" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;font-family:Helvetica,Arial,sans-serif;height:60px;max-height:100%;max-width:100%;outline:0;text-decoration:none;width:auto">
								</a>
							  </td>
							</tr>
						  </table>
						</div>
						<div class="miro__content-body" style="font-family:Helvetica,Arial,sans-serif padding:0 0 23px">
						  <div class="miro-title-block" style="background-position:center;background-repeat:no-repeat;background-size:100% auto;font-family:Helvetica,Arial,sans-serif;padding:40px 40px 0px">
							<div class="miro-title-block__title font-size-42" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:42px!important;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.24">С вами связались</div>
							<div class="miro-title-block__subtitle font-size-18 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:18px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:16px;opacity:.6">Привет от ${name}!<br><br>
								${new Date(date).toLocaleDateString("ru", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})} в ${new Date(
					date
			  ).toTimeString()} было отправлено сообщение. Мы получили следующие данные и сообщение:</div>
			  					${
									name &&
									`<div class="miro-title-block__subtitle font-size-18 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:18px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:16px;">Имя: ${name}</div>`
								}
								${
									email &&
									`<div class="miro-title-block__subtitle font-size-18 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:18px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:16px;">Email: ${email}</div>`
								}
								${
									phone &&
									`<div class="miro-title-block__subtitle font-size-18 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:18px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:16px;">Телефон: ${phone}</div>`
								}
								${
									date &&
									`<div class="miro-title-block__subtitle font-size-18 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:18px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:16px;">Дата: ${new Date(
										date
									)}</div>`
								}
								${
									message &&
									`<div class="miro-title-block__subtitle font-size-18 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:18px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:16px;">Cообщение: ${message}</div>`
								}
						  </div>
						  <div class="miro-title-block" style="padding:0 0 23px"></div>
						  <div class="miro__sep" style="background-color:#e1e0e7;font-family:Helvetica,Arial,sans-serif;height:1px"></div>
						</div>
					  </div>
					</td>
				  </tr>
				</table>
			
				<!-- prevent Gmail on iOS font size manipulation -->
				<div style="display:none;font:15px courier;font-family:Helvetica,Arial,sans-serif;line-height:0;white-space:nowrap">                                                                             
				                                           </div>
			  </body>
			</html>
		`
			: `
		<!DOCTYPE html>
	<html lang="ru" class="miro" style="background-color:#f3f4f8;font-size:0;line-height:0">
	  <head xmlns="http://www.w3.org/1999/xhtml" lang="ru" xml:lang="ru" style="font-family:Helvetica,Arial,sans-serif">
		<meta charset="UTF-8" style="font-family:Helvetica,Arial,sans-serif">
		<title style="font-family:Helvetica,Arial,sans-serif">Данные обновлены</title>
		<link rel="stylesheet" href="../css/app.css" style="font-family:Helvetica,Arial,sans-serif">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" style="font-family:Helvetica,Arial,sans-serif">
		<meta name="viewport" content="width=device-width" style="font-family:Helvetica,Arial,sans-serif">
	  </head>
	  <body style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;Margin:0;background:#f5f5f5;background-color:#f3f4f8;box-sizing:border-box;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.43;margin:0;min-width:600px;padding:0;text-align:left;width:100%!important">
		<table class="miro__container" align="center" width="600" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;font-family:Helvetica,Arial,sans-serif;max-width:600px;min-width:600px;padding:0;text-align:left;vertical-align:top">
		  <tr style="font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top">
			<td class="miro__content-wrapper" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-height:1.43;margin:0;padding:0;padding-top:43px;text-align:left;vertical-align:top;word-wrap:break-word">
			  <div class="miro__content" style="background-color:#fff;font-family:Helvetica,Arial,sans-serif">
				<div class="miro__header" style="font-family:Helvetica,Arial,sans-serif;height:100%;min-height:100px;padding:0 40px">
				  <table class="miro__header-content" style="border-collapse:collapse;border-spacing:0;font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top;width:100%">
					<tr style="font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top">
					  <td class="miro__col-header-logo" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-height:1.43;margin:0;padding:0;padding-top:32px;text-align:left;vertical-align:top;width:50%;word-wrap:break-word">
						<a href=${
							process.env.BASE_URL
						} target="_blank" style="Margin:0;color:#2a79ff;font-family:Helvetica,Arial,sans-serif;font-weight:400;line-height:1.43;margin:0;padding:0;text-align:left;text-decoration:none">
						  <img src="https://sun9-64.userapi.com/impg/MF7VrXHarYwgAmKu2ShhZ6-1rkfp0FIHLMjgzw/7gnrFk8J8PU.jpg?size=2400x2400&quality=95&sign=6af17df6ef5c94ff137c43f35df0b828&type=album" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;font-family:Helvetica,Arial,sans-serif;height:60px;max-height:100%;max-width:100%;outline:0;text-decoration:none;width:auto">
						</a>
					  </td>
					</tr>
				  </table>
				</div>
				<div class="miro__content-body" style="font-family:Helvetica,Arial,sans-serif">
				  <div class="miro-title-block" style="background-position:center;background-repeat:no-repeat;background-size:100% auto;font-family:Helvetica,Arial,sans-serif;padding:40px 40px 0px">
					<div class="miro-title-block__title font-size-42" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:42px!important;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.24">Данные Вашего аккаунта обновлены</div>
					<div class="miro-title-block__subtitle font-size-18 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:18px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:16px;opacity:.6">Здравствуйте, ${
						value[0]
					}!<br><br>
                        ${new Date(value[1]).toLocaleDateString("ru", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})} в ${new Date(
					value[1]
			  ).toTimeString()} была обновлена информация, относящаяся к Вашему аккаунту. Вы изменили следующие данные:</div>
                        <div class="miro-title-block__subtitle font-size-18 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:18px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:16px;">Пароль</div>
				  </div>
				  <div class="miro-title-block" style="background-position:center;background-repeat:no-repeat;background-size:100% auto;font-family:Helvetica,Arial,sans-serif;padding:0px 40px 23px">
					<div class="miro-title-block__subtitle font-size-18 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:18px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin:16px 0 0;opacity:.6">
					Если Вы не вносили изменений в свои данные или считаете, что посторонние лица получили доступ к Вашей учетной записи, немедленно сбросьте пароль на странице</div>
					<a href="${
						process.env.BASE_URL
					}/account/recovery" data-link-id="2" target="_blank" rel="noopener noreferrer" style="font-size: 16px;">${
					process.env.BASE_URL
			  }/account/recovery</a>
				  </div>
				  <div class="miro__sep" style="background-color:#e1e0e7;font-family:Helvetica,Arial,sans-serif;height:1px"></div>
				</div>
			  </div>
			  <div class="miro__footer" style="font-family:Helvetica,Arial,sans-serif;padding-bottom:72px;padding-top:42px">
				<div class="miro__footer-title" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.38;margin-top:0!important;opacity:.7;text-align:center">Вы получили это уведомление, так как зарегистрировались
				  <br style="font-family:Helvetica,Arial,sans-serif">на
				  <a href=${
						process.env.BASE_URL
					} target="_blank" style="Margin:0;color:inherit;font-family:Helvetica,Arial,sans-serif;font-weight:400;line-height:1.43;margin:0;padding:0;text-align:left;text-decoration:none">Nero</a> — Соединение идей и людей — как разговоры могут изменить нашу жизнь.</div>
			  </div>
			</td>
		  </tr>
		</table>
	
		<!-- prevent Gmail on iOS font size manipulation -->
		<div style="display:none;font:15px courier;font-family:Helvetica,Arial,sans-serif;line-height:0;white-space:nowrap">                                                                             
		                                           </div>
	  </body>
	</html>
		`;
	},
};

module.exports = { mailOptions };
