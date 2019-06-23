const passport = require("passport");
const { createToken } = require("../validation/utils");
const secret = require("../config/keys").secret;

const baseURL =
	process.env.NODE_ENV === "production"
		? "https://manehabi02.herokuapp.com"
		: "http://localhost:3000";

module.exports = app => {
	app.get("/auth/twitter", passport.authenticate("twitter"));
	app.get(
		"/auth/twitter/callback",
		passport.authenticate("twitter", {
			failureRedirect: `${baseURL}`
		}),
		(req, res) => {
			console.log(req.user);

			// const token = createToken(req.user, secret, "1hr");
			res.redirect(`${baseURL}`);
		}
	);
};
