const psw1 = document.querySelector("#psw1");
const psw2 = document.querySelector("#psw2");
const message = document.querySelector("#formmessage");

psw2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (psw1.value !== psw2.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		psw2.style.backgroundColor = "#fff0f3";
		psw2.value = "";
		psw2.focus();
	} else {
		message.style.display = "none";
		psw2.style.backgroundColor = "#fff";
		psw2.style.color = "#000";
	}
}
