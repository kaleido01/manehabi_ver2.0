const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const twitterStrategy = require("passport-twitter").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const consumerKey = require("../config/keys").consumerKey;
const consumerSecret = require("../config/keys").consumerSecret;

const User = mongoose.model("users");
const url = require("../config/keys").baseClientURL;

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id });
			if (existingUser) {
				//既にそのIDを持つユーザーはいるためレコードは作成しない
				return done(null, existingUser);
			}
			const user = await new User({ googleId: profile.id }).save();
			done(null, user);
		}
	)
);

passport.use(
	new twitterStrategy(
		{
			consumerKey,
			consumerSecret,
			callbackURL: `${url}/auth/twitter/callback`,
			userProfileURL:
				"https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true"
		},
		async (token, tokenSecret, profile, done) => {
			//認証通過後の処理はここに書く

			const { displayName, emails, photos, id, provider } = profile;
			const existedUser = await User.findOne({ email: emails[0].value });
			//callbackの呼び出し
			if (!existedUser) {
				const newUser = new User({
					email: emails[0].value
				});
				await newUser.save();
				done(null, newUser);
			}

			done(null, existedUser);
		}
	)
);
