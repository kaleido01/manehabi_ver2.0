const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const path = require("path");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser"); // parse cookie header
const cookieSession = require("cookie-session");
const { createToken } = require("./validation/utils");
require("./config/passport");

const app = express();

const db = require("./config/keys").mongoURI;
const secret = require("./config/keys").secret;
const baseClientURL = require("./config/keys").baseClientURL;
const baseURL =
	process.env.NODE_ENV === "production"
		? "https://manehabi02.herokuapp.com"
		: "http://localhost:3000";

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));

const corsOption = {
	origin: ["https://manehabi.herokuapp.com"],
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	credentials: true
};

app.use(cors("*"));

app.use(bodyParser.json());
app.use(passport.initialize());

const cookieKeys = require("./config/keys").cookieKeys;
app.use(
	cookieSession({
		name: "session",
		keys: [cookieKeys],
		maxAge: 24 * 60 * 60 * 100
	})
);

app.use(cookieParser());
app.use(passport.session());

app.get("/return-json", (req, res, next) => {
	res.redirect("/signup");
});

require("./routes/authRoutes")(app);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`Server listhening on PORT ${PORT}`);
});
