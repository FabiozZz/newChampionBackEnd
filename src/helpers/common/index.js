import moment from 'moment';

export function isEmpty(obj) {
	for (let key in obj) {
		// если тело цикла начнет выполняться - значит в объекте есть свойства
		return false;
	}
	return true;
}

export const ageToString = birth => {
	let dateNow = moment();
	let dateBirth = moment(birth.replace(/(\d{2}).(\d{2}).(\d{4})/g, '$3-$2-$1'));
	let mathAge = Math.floor(dateNow.diff(dateBirth, 'year'));
	mathAge +=
		mathAge % 100 < 21 ||
		mathAge % 10 < 1 ||
		(mathAge % 10 > 4 && mathAge % 10 <= 9) ||
		mathAge % 10 === 0
			? ' лет'
			: mathAge % 10 === 1
			? ' год'
			: ' года';
	return mathAge;
};
export function declOfLessonsNum(n) {
	let text_forms = ['знятие', 'занятия', 'занятий'];
	n = Math.abs(n) % 100;
	var n1 = n % 10;
	if (n > 10 && n < 20) {
		return text_forms[2];
	}
	if (n1 > 1 && n1 < 5) {
		return text_forms[1];
	}
	if (n1 === 1) {
		return text_forms[0];
	}
	return text_forms[2];
}
export function declOfGroupsNum(n) {
	let text_forms = ['группа', 'группы', 'групп'];
	n = Math.abs(n) % 100;
	var n1 = n % 10;
	if (n > 10 && n < 20) {
		return text_forms[2];
	}
	if (n1 > 1 && n1 < 5) {
		return text_forms[1];
	}
	if (n1 === 1) {
		return text_forms[0];
	}
	return text_forms[2];
}
export function declOfHumanNum(n) {
	let text_forms = ['человек', 'человека', 'человек'];
	n = Math.abs(n) % 100;
	var n1 = n % 10;
	if (n > 10 && n < 20) {
		return text_forms[2];
	}
	if (n1 > 1 && n1 < 5) {
		return text_forms[1];
	}
	if (n1 === 1) {
		return text_forms[0];
	}
	return text_forms[2];
}
export function declOfResults(n) {
	let text_forms = ['результат', 'результата', 'результатов'];
	n = Math.abs(n) % 100;
	var n1 = n % 10;
	if (n === 0) {
		return text_forms[2];
	}
	if (n > 10 && n < 20) {
		return text_forms[2];
	}
	if (n1 > 1 && n1 < 5) {
		return text_forms[1];
	}
	if (n1 === 1) {
		return text_forms[0];
	}
	return text_forms[2];
}
export function declOfWeekNum(n) {
	let text_forms = ['неделя', 'недели', 'недель'];
	n = Math.abs(n) % 100;
	var n1 = n % 10;
	if (n > 10 && n < 20) {
		return text_forms[2];
	}
	if (n1 > 1 && n1 < 5) {
		return text_forms[1];
	}
	if (n1 === 1) {
		return text_forms[0];
	}
	return text_forms[2];
}
export function declOfDay(n) {
	let text_forms = ['день', 'дня', 'дней'];
	n = Math.abs(n) % 100;
	var n1 = n % 10;
	if (n > 10 && n < 20) {
		return text_forms[2];
	}
	if (n1 > 1 && n1 < 5) {
		return text_forms[1];
	}
	if (n1 === 1) {
		return text_forms[0];
	}
	return text_forms[2];
}

export default function phoneMask() {
	debugger;

	var phoneInputs = document.querySelectorAll('input[data-tel-input]');
	var getInputNumbersValue = function (input) {
		// Return stripped input value — just numbers
		return input.value.replace(/\D/g, '');
	};

	var onPhonePaste = function (e) {
		var input = e.target,
			inputNumbersValue = getInputNumbersValue(input);
		var pasted = e.clipboardData || window.clipboardData;
		if (pasted) {
			var pastedText = pasted.getData('Text');
			if (/\D/g.test(pastedText)) {
				// Attempt to paste non-numeric symbol — remove all non-numeric symbols,
				// formatting will be in onPhoneInput handler
				input.value = inputNumbersValue;
				return;
			}
		}
	};

	var onPhoneInput = function (e) {
		var input = e.target,
			inputNumbersValue = getInputNumbersValue(input),
			selectionStart = input.selectionStart,
			formattedInputValue = '';

		if (!inputNumbersValue) {
			return (input.value = '');
		}

		if (input.value.length !== selectionStart) {
			// Editing in the middle of input, not last symbol
			if (e.data && /\D/g.test(e.data)) {
				// Attempt to input non-numeric symbol
				input.value = inputNumbersValue;
			}
			return;
		}

		if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
			debugger;
			if (inputNumbersValue[0] === '9') inputNumbersValue = '7' + inputNumbersValue;
			var firstSymbols = inputNumbersValue[0] === '8' ? '8' : '+7';
			formattedInputValue = input.value = firstSymbols + ' ';
			if (inputNumbersValue.length > 1) {
				formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
			}
			if (inputNumbersValue.length >= 5) {
				formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
			}
			if (inputNumbersValue.length >= 8) {
				formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
			}
			if (inputNumbersValue.length >= 10) {
				formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
			}
		} else {
			formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
		}
		input.value = formattedInputValue;
	};
	var onPhoneKeyDown = function (e) {
		// Clear input after remove last symbol
		var inputValue = e.target.value.replace(/\D/g, '');
		if (e.keyCode === 8 && inputValue.length === 1) {
			e.target.value = '';
		}
	};
	for (var phoneInput of phoneInputs) {
		phoneInput.addEventListener('keydown', onPhoneKeyDown);
		phoneInput.addEventListener('input', onPhoneInput, false);
		phoneInput.addEventListener('paste', onPhonePaste, false);
	}
}

export const isBirthDay = date => {
	let dateFinish = moment();
	let dateStart = moment().subtract(3, 'd').format('YYYY-MM-DD');
	let birthData = moment(date).format(`${dateFinish.format('YYYY')}-MM-DD`);
	return moment(birthData).isBetween(
		dateStart,
		dateFinish.format('YYYY-MM-DD'),
		undefined,
		'[]'
	);
};
export function replaceDateforBack(date) {
	if (typeof date == 'object') {
		date = date.join('');
	}
	return date.replace(/(\d{2})[/|.](\d{2})[/|.](\d{4})/g, '$3-$2-$1');
}

export function countDaysbetweenTwoDate(array) {
	const [from, to] = array;
	const start_day = moment(replaceDateforBack(to));
	const end_day = moment(replaceDateforBack(from));
	return start_day.diff(end_day, 'days');
}

export function replaceDateforFront(date, format = 'DD.MM.YYYY') {
	return moment(date).format(format);
}

export function maxThreeDay(date) {
	let currentDate = new Date();
	let maxDay = replaceDateforBack(
		new Date(currentDate.setDate(currentDate.getDate() - 3)).toLocaleDateString()
	);
	return moment(maxDay).isBefore(replaceDateforBack(date));
}

export function sameDateNow(date) {
	let currentDate = replaceDateforBack(new Date().toLocaleDateString());
	return moment(currentDate).isSame(replaceDateforBack(date));
}

export function sameDate(date) {
	let currentDate = replaceDateforBack(new Date().toLocaleDateString());
	return moment(currentDate).isAfter(replaceDateforBack(date));
}

export function authSameDate(currentDate) {
	console.log(moment().format('YYYY-MM-DD'));
	console.log(replaceDateforBack(currentDate));
	console.log(
		moment(moment().format('YYYY-MM-DD')).isSame(replaceDateforBack(currentDate))
	);
	return moment(moment().format('YYYY-MM-DD')).isSame(replaceDateforBack(currentDate));
}

export const presence_of_variables = function () {
	for (let i = 0; i < arguments.length; i++) {
		if (!arguments[i]) {
			return true;
		}
	}
	return false;
};
export function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
export function makeMoney(n) {
	return parseFloat(n)
		.toFixed(2)
		.replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
}