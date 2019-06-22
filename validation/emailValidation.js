const validator = require("validator");

const { isEmpty, isEmail, isLength } = validator;

exports.validateEmail = (email, errors) => {
	if (!isEmail(email)) {
		errors.push({
			message: "Eメールが不正です"
		});
	}
};
