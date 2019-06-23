const proxy = require("http-proxy-middleware");

module.exports = function(app) {
	app.use(proxy("/auth/twitter", { target: "http://localhost:4000" }));
	app.use(proxy("/api/**", { target: "http://localhost:4000" }));
};
