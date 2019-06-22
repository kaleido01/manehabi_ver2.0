const jwt = require("jsonwebtoken");

exports.checkErrors = errors => {
	if (errors.length > 0) {
		const error = new Error(errors);
		error.data = errors;
		error.code = 422;
		throw error;
	}
};

exports.createToken = (user, secret, expiresIn) => {
	const { username, email } = user;
	const token = jwt.sign({ username, email }, secret, { expiresIn });
	return token;
};
