const body = document.body;
const btnGenerate = document.querySelector('#btn-generate');
const cssColorBlock = document.querySelector('.css-color');
const colorField = cssColorBlock.querySelector('span');
const btnTypeHex = document.querySelector('#type-hex');
const btnTypeRgb = document.querySelector('#type-rgb');
const notificationBlock = document.querySelector('.notification');
const notificationCloseBtn = notificationBlock.querySelector('button');
let notificationTimer = null;

let currentColor = [20, 30, 40];
let colorType = 'rgb';

const getRandomNumber = () => {
  return Math.floor(Math.random() * 256);
};

const toHexNumber = (number) => {
  let hex = number.toString(16);

  if (hex.length === 1) {
    hex = '0' + hex;
  }

  return hex;
};

const getRandomColor = () => {
  return [0, 0, 0].map(() => getRandomNumber());
};

const toHexColor = (rgbArray) => '#' + rgbArray.map(toHexNumber).join('');
const toRgbColor = (rgbArray) => 'rgb(' + rgbArray.join(', ') + ')';

const updateColorField = () => {
  if (colorType === 'hex') {
    return (colorField.textContent = toHexColor(currentColor));
  }

  colorField.textContent = toRgbColor(currentColor);
};

const updateBodyBackground = () => {
  body.style.backgroundColor = toHexColor(currentColor);
};

const showNotification = () => {
  clearTimeout(notificationTimer);
  notificationTimer = setTimeout(closeNotification, 3000);
  if (!notificationBlock.classList.contains('visible')) {
    return notificationBlock.classList.add('visible');
  }

  notificationBlock.classList.remove('multiple');
  void notificationBlock.offsetWidth;
  notificationBlock.classList.add('multiple');
};

const closeNotification = () => {
  notificationBlock.classList.remove('visible', 'multiple');
  clearTimeout(notificationTimer);
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

document.addEventListener('keypress', (e) => {
  if (e.key === ' ') {
    currentColor = getRandomColor();
    updateColorField();
    updateBodyBackground();
  }
});

notificationCloseBtn.addEventListener('click', closeNotification);

cssColorBlock.addEventListener('click', (e) => {
  navigator.clipboard
    .writeText(`background-color: ${colorField.textContent}`)
    .then(showNotification);
});
