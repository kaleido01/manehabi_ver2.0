const validator = require("validator");

const { isEmpty, isNumeric, isInt } = validator;

exports.validateTitle = (title, errors) => {
	if (isEmpty(title)) {
		errors.push({
			message: "タイトルは必須です"
		});
	}
};

exports.validateDescription = (description, errors) => {
	if (isEmpty(description)) {
		errors.push({
			message: "説明は必須です"
		});
	}
};

exports.validateUnits = (units, errors) => {
	units.forEach(unit => {
		if (isEmpty(unit)) {
			errors.push({
				message: "単位は全て埋めてください"
			});
		}
	});
};

exports.validateToday = (todayRecords, errors) => {
	console.log(errors);
	todayRecords.map(todayRecord => {
		const { today } = todayRecord;
		if (!isNumeric("" + today, { min: 0 })) {
			errors.push({
				message: "0以上の値を入力してください"
			});
		}
	});
	console.log(errors);
};
