const modeButton = document.querySelector("#mode");



modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
        document.querySelector(':root').style.setProperty('--font-color-ondark', '#FFFEEB');
        document.querySelector(':root').style.setProperty('--font-color-onlight', '#FFFEEB');
        document.querySelector(':root').style.setProperty('--primary-color', '#2C111A');
        document.querySelector(':root').style.setProperty('--secondary-color', '#1D0C11');
        document.querySelector(':root').style.setProperty('--accent1-color', '#5D404F');
        document.querySelector(':root').style.setProperty('--button-color', '#CCAD00');
		modeButton.textContent = "❎";
	} else {
        document.querySelector(':root').style.setProperty('--font-color-ondark', '#E7DAE1');
        document.querySelector(':root').style.setProperty('--font-color-onlight', '#5B2333');
        document.querySelector(':root').style.setProperty('--primary-color', '#E7DAE1');
        document.querySelector(':root').style.setProperty('--secondary-color', '#5B2333');
        document.querySelector(':root').style.setProperty('--accent1-color', '#fff');
        document.querySelector(':root').style.setProperty('--button-color', '#FFD700');
		modeButton.textContent = "☑️";
	}
});