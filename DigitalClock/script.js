let timer;
let stopwatchInterval;
let stopwatchRunning = false;
let elapsedMilliseconds = 0;
let stopwatchStartTime = null;
let lapCount = 0;

function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-btn').forEach((button) => {
        button.classList.toggle('active', button.dataset.theme === theme);
    });
}

function updateTime(gmtOffset) {
    const now = new Date();
    const utcTimestamp = now.getTime() + (now.getTimezoneOffset() * 60000);
    const newTimestamp = utcTimestamp + (gmtOffset * 3600000);
    const newDate = new Date(newTimestamp);

    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const timeDisplay = document.getElementById('timeDisplay');
    timeDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

    const periodDisplay = document.getElementById('amPm');
    periodDisplay.textContent = period;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : `${time}`;
}

function formatStopwatchTime(elapsedTime) {
    const hours = formatTime(Math.floor(elapsedTime / (1000 * 60 * 60)));
    const minutes = formatTime(Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = formatTime(Math.floor((elapsedTime % (1000 * 60)) / 1000));
    const milliseconds = formatTime(Math.floor((elapsedTime % 1000) / 10));

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function updateGMT(gmtOffset) {
    clearInterval(timer);
    updateTime(gmtOffset);
    timer = setInterval(() => updateTime(gmtOffset), 1000);
}

function startStopwatch() {
    if (stopwatchRunning) {
        return;
    }

    // Start from the already accumulated time so the stopwatch resumes correctly after a pause.
    stopwatchStartTime = Date.now() - elapsedMilliseconds;
    stopwatchInterval = setInterval(() => {
        elapsedMilliseconds = Date.now() - stopwatchStartTime;
        updateStopwatch(elapsedMilliseconds);
    }, 10);
    stopwatchRunning = true;
}

function stopStopwatch() {
    if (!stopwatchRunning) {
        return;
    }

    // Stop the timer and freeze the current elapsed time instead of storing confusing values.
    clearInterval(stopwatchInterval);
    elapsedMilliseconds = Date.now() - stopwatchStartTime;
    updateStopwatch(elapsedMilliseconds);
    stopwatchRunning = false;
}

function resetStopwatch() {
    // Clear all stopwatch state so the next run begins from zero.
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    elapsedMilliseconds = 0;
    stopwatchStartTime = null;
    lapCount = 0;
    document.getElementById('stopwatchDisplay').textContent = '00:00:00.00';
    document.getElementById('lapsList').innerHTML = '';
}

function updateStopwatch(elapsedTime) {
    const stopwatchDisplay = document.getElementById('stopwatchDisplay');
    stopwatchDisplay.textContent = formatStopwatchTime(elapsedTime);
}

function recordLap() {
    if (!stopwatchRunning) {
        return;
    }

    // Record the current stopwatch time as a lap label instead of relying on the old array logic.
    const lapsList = document.getElementById('lapsList');
    const lapItem = document.createElement('li');
    lapCount += 1;
    lapItem.textContent = `Lap ${lapCount}: ${formatStopwatchTime(elapsedMilliseconds)}`;
    lapsList.appendChild(lapItem);
}

document.querySelectorAll('.theme-btn').forEach((button) => {
    button.addEventListener('click', () => setTheme(button.dataset.theme));
});

setTheme('dark');
updateGMT(1);
