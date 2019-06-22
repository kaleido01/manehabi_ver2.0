const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;
const Comment = require("./Comment");
const HabitRecord = require("./HabitRecord");
const User = require("./User");

const HabitSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	startDate: {
		type: Date,
		default: Date.now
	},
	updateDate: {
		type: Date,
		default: null
	},
	limitDate: {
		type: Date,
		default: () =>
			moment()
				.add(1, "days")
				.endOf("day")
				.toDate()
	},
	countDate: {
		type: Number,
		default: 0
	},
	numberOfFailure: {
		type: Number,
		default: 0
	},
	habitRecords: [
		{
			recordNumber: {
				type: Schema.Types.ObjectId
			},
			unit: {
				type: String,
				required: true
			},
			records: {
				type: [Schema.Types.ObjectId],
				ref: "HabitRecord",
				default: []
			}
		}
	],
	creator: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	starUser: {
		type: [Schema.Types.ObjectId],
		default: [],
		ref: "User"
	},
	comments: {
		type: [Schema.Types.ObjectId],
		default: [],
		ref: "Comment"
	}
});

HabitSchema.post("remove", (doc, next) => {
	console.log(doc);
	User.updateMany(
		{ favorites: { _id: doc._id } },
		{ $pull: { favorites: doc._id } }
	).exec();
	Comment.remove({ _id: { $in: doc.comments } }).exec();
	HabitRecord.remove({ habitId: doc._id }).exec();
	next();
});

HabitSchema.index({ "$**": "text" });

// schema.index({name: 'text', 'profile.something': 'text'});

module.exports = mongoose.model("Habit", HabitSchema);
