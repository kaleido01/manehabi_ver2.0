const validator = require("validator");

const { isEmpty, isEmail, isLength, equals } = validator;

exports.isCurrentUser = (currentUser, errors) => {
	if (!currentUser) {
		errors.push({
			message:
				"セッションが切れているか、ログインされていません。ログインしてください"
		});
	}
};

exports.isFindUser = (user, errors) => {
	if (!user) {
		errors.push({
			message: "ユーザーが見つかりません"
		});
	}
};

exports.validateNewUser = (
	username,
	email,
	password,
	confirmPassword,
	errors
) => {
	if (isEmpty(username)) {
		errors.push({
			message: "ユーザー名は必須です"
		});
	}
	if (!isEmail(email)) {
		errors.push({
			message: "Eメールが不正です"
		});
	}
	if (
		isEmpty(password) ||
		!isLength(password, { min: 6 }) ||
		isEmpty(confirmPassword) ||
		!equals(password, confirmPassword)
	) {
		errors.push({
			message: "パスワードが不正です"
		});
	}
};

exports.isAlreadyUser = (user, errors) => {
	if (user) {
		errors.push({
			message: "既に登録されているEメールです"
		});
	}
};
