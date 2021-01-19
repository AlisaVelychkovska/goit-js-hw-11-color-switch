const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const refs = {
  $body: document.querySelector("body"),
  $startBtn: document.querySelector('button[data-action="start"]'),
  $stopBtn: document.querySelector('button[data-action="stop"]'),
};
const { $body, $startBtn, $stopBtn } = refs;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

$startBtn.addEventListener("click", handleStart);
$stopBtn.addEventListener("click", handleStop);
let intervalId = null;

function handleStart({ target }) {
  target.disabled = true;
  intervalId = setInterval(setRandomBodyColour, 1000);
}
function setRandomBodyColour() {
  const backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
  $body.style.backgroundColor = backgroundColor;
}
function handleStop() {
  $startBtn.disabled = false;
  clearInterval(intervalId);
}
