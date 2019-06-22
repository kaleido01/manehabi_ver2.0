const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	body: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	creator: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	habitId: {
		type: Schema.Types.ObjectId,
		ref: "Habit"
	}
});

CommentSchema.index({ "$**": "text" });

module.exports = mongoose.model("Comment", CommentSchema);
