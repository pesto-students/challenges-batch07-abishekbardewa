import { isString } from 'util';

function abbreviateString(str) {
	if (!str && typeof str !== 'string') {
		throw new Error('Invalid Parameters');
	}
	const strArr = str.split(' ');
	if (strArr.length === 1) {
		return strArr[0];
	} else {
		let abbreviation = strArr[0] + ' ' + strArr[strArr.length - 1][0].toUpperCase() + '.';
		return abbreviation;
	}
}

export { abbreviateString };
