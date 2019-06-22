const validator = require("validator");
const bcrypt = require("bcryptjs");
const { checkErrors } = require("./utils");

const { isEmpty, isEmail, isLength } = validator;

exports.validatePasswordLength = (password, errors) => {
	if (!isLength(password, { min: 6 })) {
		errors.push({
			message: "パスワードが不正です"
		});
	}
};

exports.validateIsWrongPassword = (isValidPassword, errors) => {
	if (!isValidPassword) {
		errors.push({
			message: "パスワードが不正です"
		});
	}
};
