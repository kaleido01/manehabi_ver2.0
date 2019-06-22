const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HabitRecordSchema = new Schema({
	date: {
		type: Date,
		default: Date.now
	},
	total: {
		type: Number,
		default: 0
	},
	today: {
		type: Number,
		required: true
	},
	before: {
		type: Schema.Types.ObjectId,
		default: null,
		ref: "HabitRecord"
	},
	habitId: {
		type: Schema.Types.ObjectId,
		ref: "Habit",
		required: true
	},
	habitRecordNumber: {
		type: Schema.Types.ObjectId,
		required: true
	}
});

module.exports = mongoose.model("HabitRecord", HabitRecordSchema);
