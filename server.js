const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const path = require("path");
const passport = require("passport");
const cookieParser = require("cookie-parser"); // parse cookie header
const cookieSession = require("cookie-session");

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`Server listhening on PORT ${PORT}`);
});
