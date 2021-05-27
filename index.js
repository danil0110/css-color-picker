const body = document.body;
const btnGenerate = document.querySelector('#btn-generate');
const colorField = document.querySelector('.css-color span');

let currentColor = [20, 30, 40];

const getRandomNumber = () => {
	return Math.floor(Math.random() * 256);
};

const toHexNumber = number => {
	let hex = number.toString(16);

	if (hex.length === 1) {
		hex = '0' + hex;
	}

	return hex;
};

const getRandomColor = () => {
	return [0, 0, 0].map(() => getRandomNumber());
};

const toHexColor = rgbArray => '#' + rgbArray.map(toHexNumber).join('');

const updateColorField = () => {
	colorField.textContent = toHexColor(currentColor);
};

const updateBodyBackground = () => {
	body.style.backgroundColor = toHexColor(currentColor);
};

btnGenerate.addEventListener('click', () => {
	currentColor = getRandomColor();
	updateColorField();
	updateBodyBackground();
});

document.addEventListener('keypress', e => {
	if (e.key === ' ') {
		currentColor = getRandomColor();
		updateColorField();
		updateBodyBackground();
	}
});
