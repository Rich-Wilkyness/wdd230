const millisecondsInDay = 86400000; //miliseconds in a day
const currentTime = new Date();
const visited = document.querySelector('#visited');

let lastVisited = Number(window.localStorage.getItem('last-visited')) || currentTime;

const timePassed = currentTime - lastVisited; //this is in miliseconds

if (timePassed === 0) {
    visited.textContent = "Welcome! Let us know if you have any questions.";
} else if (timePassed >= millisecondsInDay) {
    const daysSince = Math.floor(timePassed/millisecondsInDay);
    visited.textContent = `You last visited ${daysSince} day(s) ago.`;
}
else {
    visited.textContent = 'Back so soon! Awesome!';
}

localStorage.setItem('last-visited', currentTime);
