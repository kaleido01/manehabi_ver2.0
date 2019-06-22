const passport = require("passport");
const { createToken } = require("../validation/utils");

module.exports = app => {
	app.get(`/auth/twitter`, passport.authenticate("twitter"));
	app.get(
		"/auth/twitter/callback",
		passport.authenticate("twitter", {
			failureRedirect: "/signin"
		}),
		(req, res) => {
			console.log(req.user);

			const token = createToken(req.user, secret, "1hr");
			res.redirect(`${baseURL}/habits?token=${token}`);
		}
	);
};
