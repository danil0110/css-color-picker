const body = document.body;
const btnGenerate = document.querySelector('#btn-generate');
const colorField = document.querySelector('.css-color span');
const btnTypeHex = document.querySelector('#type-hex');
const btnTypeRgb = document.querySelector('#type-rgb');

let currentColor = [20, 30, 40];
let colorType = 'rgb';

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
const toRgbColor = rgbArray => 'rgb(' + rgbArray.join(', ') + ')';

const updateColorField = () => {
	if (colorType === 'hex') {
		return (colorField.textContent = toHexColor(currentColor));
	}

	colorField.textContent = toRgbColor(currentColor);
};

const updateBodyBackground = () => {
	body.style.backgroundColor = toHexColor(currentColor);
};

btnGenerate.addEventListener('click', () => {
	currentColor = getRandomColor();
	updateColorField();
	updateBodyBackground();
});

btnTypeHex.addEventListener('click', () => {
	btnTypeHex.classList.add('active');
	btnTypeRgb.classList.remove('active');

	colorType = 'hex';
	updateColorField();
});

btnTypeRgb.addEventListener('click', () => {
	btnTypeRgb.classList.add('active');
	btnTypeHex.classList.remove('active');

	colorType = 'rgb';
	updateColorField();
});

document.addEventListener('keypress', e => {
	if (e.key === ' ') {
		currentColor = getRandomColor();
		updateColorField();
		updateBodyBackground();
	}
});
