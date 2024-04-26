const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    .toString()
    .padStart(2, '0');
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
    .toString()
    .padStart(2, '0');
  let seconds = Math.floor((elapsedTime / 1000) % 60)
    .toString()
    .padStart(2, '0');
  let milliseconds = Math.floor((elapsedTime % 1000) / 10)
    .toString()
    .padStart(2, '0');

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

startBtn.onclick = () => {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
};

stopBtn.onclick = () => {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime - startTime;
    isRunning = false;
  }
};

resetBtn.onclick = () => {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = '00:00:00:00';
};
