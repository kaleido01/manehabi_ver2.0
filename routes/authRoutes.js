const passport = require("passport");

const baseURL =
	process.env.NODE_ENV === "production"
		? "https://react-and-nodejs-fullstack-01.herokuapp.com/"
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
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	app.get(
		"/auth/google/callback",
		passport.authenticate("google"),
		(req, res) => {
			res.redirect("/surveys");
		}
	);

	app.get("/api/logout", (req, res) => {
		req.logout();

		res.redirect("/");
	});

	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});
};
