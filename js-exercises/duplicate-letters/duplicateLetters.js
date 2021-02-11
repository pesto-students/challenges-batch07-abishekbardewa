function duplicateLetters(...args) {
	const arr = args[0].split('');

	const duplicatesArr = arr.filter((item) => {
		return arr.indexOf(item) !== arr.lastIndexOf(item);
	});

	let count = [...new Set(duplicatesArr)].length;
	if (count) {
		return count + 1;
	} else {
		return false;
	}
}

export { duplicateLetters };
