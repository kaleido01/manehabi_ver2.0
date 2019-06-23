//propd.js - propduction key
module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	consumerKey: process.env.CONSUMER_KEY,
	consumerSecret: process.env.CONSUMER_SECRET,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY,
	stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
	stripeSecretKey: process.env.STRIPE_SECRET_KEY
};
