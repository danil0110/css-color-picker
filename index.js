const toHexNumber = number => {
	let hex = number.toString(16);

	if (hex.length === 1) {
		hex = '0' + hex;
	}

	return hex;
};

const toHexColor = arr => '#' + arr.map(toHexNumber).join('');
