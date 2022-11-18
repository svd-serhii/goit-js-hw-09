const refs = {
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyChangeColor = {
  intervalId: null,
  start() {
    refs.startButton.setAttribute('disabled', '');
    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    console.log('start');
  },
  stop() {
    refs.startButton.removeAttribute('disabled', '');
    clearInterval(this.intervalId);
    console.log('stop');
  },
};

refs.startButton.addEventListener('click', () => {
  bodyChangeColor.start();
});
refs.stopButton.addEventListener('click', () => {
  bodyChangeColor.stop();
});
