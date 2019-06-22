const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	imageUrl: {
		type: String
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String
	},
	provider: {
		authType: String,
		authId: String,
		token: String,
		tokenSecret: String
	},
	oneWord: {
		type: String,
		default: ""
	},
	description: {
		type: String,
		default: ""
	},
	joinDate: {
		type: String,
		default: () => moment().format("YYYY-MM-DD")
	},
	favorites: {
		type: [Schema.Types.ObjectId],
		default: [],
		ref: "Habit"
	},
	habits: {
		type: [Schema.Types.ObjectId],
		default: [],
		ref: "Habit"
	}
});

module.exports = mongoose.model("User", UserSchema);
