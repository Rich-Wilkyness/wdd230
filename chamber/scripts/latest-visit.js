const millisecondsInDay = 86400000; //miliseconds in a day
const currentTime = new Date();
const visited = document.querySelector('#visited');

const storedValue = localStorage.getItem('last-visited') || currentTime;
const lastVisited = storedValue ? new Date(JSON.parse(storedValue)) : currentTime;

const timePassed = currentTime - lastVisited; //this is in miliseconds

localStorage.setItem('last-visited', JSON.stringify(currentTime));

if (timePassed === 0) {
    visited.textContent = "Welcome! Let us know if you have any questions.";
} else if (timePassed >= millisecondsInDay) {
    const daysSince = (timePassed/millisecondsInDay);
    visited.textContent = `You last visited ${daysSince} day(s) ago.`;
}
else if (timePassed > 0 && timePassed < millisecondsInDay) {
    visited.textContent = 'Back so soon! Awesome!';
}