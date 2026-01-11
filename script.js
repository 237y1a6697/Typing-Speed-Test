const text = document.getElementById("text").innerText;
const input = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const startBtn = document.getElementById("startBtn");

let time = 60;
let timer;
let started = false;

startBtn.addEventListener("click", startTest);

function startTest() {
    if (started) return;

    started = true;
    time = 60;
    input.value = "";
    input.disabled = false;
    input.focus();

    timer = setInterval(updateTime, 1000);
}

function updateTime() {
    time--;
    timeEl.innerText = time;

    if (time === 0) {
        clearInterval(timer);
        input.disabled = true;
        calculateResult();
    }
}

function calculateResult() {
    const typedText = input.value;
    let correctChars = 0;

    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === text[i]) {
            correctChars++;
        }
    }

    const words = correctChars / 5;
    const wpm = Math.round(words / 1); // 1 minute
    const accuracy = Math.round((correctChars / typedText.length) * 100) || 0;

    wpmEl.innerText = wpm;
    accuracyEl.innerText = accuracy;
}
